import { fork } from 'child_process'
import { connect } from 'net'

/**
 * ---------------------------------
 * |  1Byte   |  4Byte  |          |
 * |  Channel |  Length |  Chunk   |
 * ---------------------------------
 *
 * Writable로 목적지를 설정해서 스트리밍을 하면
 * Readable로 받아서 처리
 *
 * Buffer.alloc으로 버퍼에 채널정보와 청크를 함께 담아서 다시 socket에 스트림
 *
 * TCP / UDP
 */

function multiplexChannels(sources, destination) {
  let openChannels = sources.length
  for (let i = 0; i < sources.length; i++) {
    sources[i]
      .on('readable', function () {
        // ①
        let chunk
        while ((chunk = this.read()) !== null) {
          const outBuff = Buffer.alloc(1 + 4 + chunk.length) // ②
          outBuff.writeUInt8(i, 0) // 0번째 메모리에 (1바이트)
          outBuff.writeUInt32BE(chunk.length, 1) // 1바이트 채웠으니 1번째 메모리에 4바이트를
          chunk.copy(outBuff, 5) // 총 5바이트 채웠으니(인덱스 0~4) 인덱스 5번에 나머지 chun를 outBuff에
          console.log(`Sending packet to channel: ${i}`)
          destination.write(outBuff) // ③
        }
      })
      .on('end', () => {
        // ④
        if (--openChannels === 0) {
          destination.end()
        }
      })
  }
}

const socket = connect(3000, () => {
  // ①
  const child = fork(
    // ② 왜 포크를 쓸까
    process.argv[2],
    process.argv.slice(3),
    { silent: true }
  )
  multiplexChannels([child.stdout, child.stderr], socket) // ③
})
