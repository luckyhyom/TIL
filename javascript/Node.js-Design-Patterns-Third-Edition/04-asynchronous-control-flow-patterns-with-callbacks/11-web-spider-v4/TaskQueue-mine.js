import { EventEmitter } from 'events'

export class TaskQueue extends EventEmitter {
  constructor(concurrency) {
    super()
    this.concurrency = concurrency
    this.running = 0
    this.queue = []
    this.i = 0
    this.j = 0
    this.z = 0
  }

  pushTask(task) {
    this.queue.push(task)
    process.nextTick(this.next.bind(this))
    return this
  }

  next() {
    if (this.running === 0 && this.queue.length === 0) {
      return this.emit('empty')
    }
    console.log(
      'start:',
      this.z++,
      'queue:',
      this.queue.length,
      'this.running',
      this.running
    )
    while (this.running < this.concurrency && this.queue.length) {
      console.log(
        'while:',
        this.i++,
        'queue:',
        this.queue.length,
        'this.running',
        this.running
      )
      const task = this.queue.shift()
      task((err) => {
        if (err) {
          this.emit('error', err)
        }
        this.running--
        process.nextTick(this.next.bind(this))
      })
      this.running++
    }
    console.log(
      'end:',
      this.j++,
      'queue:',
      this.queue.length,
      'this.running',
      this.running
    )
  }
}
