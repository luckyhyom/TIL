import { createServer } from "http";
import staticHandler from "serve-handler";
import ws from "ws";

// serve static files
const server = createServer((req, res) => {
    return staticHandler(req, res, { public: "www" });
});

const wss = new ws.Server({ server });
wss.on("connection", (client) => {
    console.log("Client connected");
    client.on("message", (msg) => {
        console.log(`Message: ${msg}`);
        broadcast(msg);
    });
    client.send("차트");
});

function broadcast(msg) {
    for (const client of wss.clients) {
        if (client.readyState === ws.OPEN) {
            client.send(msg + "chart..");
        }
    }
}
/**
 * 클라이언트에서 소켓에 이벤트를 따로 보내는게 나을것 같다. 서버에서 컨트롤러 -> 컨트롤러 가는 것 보다. 이유는? A라는 액션을 할 때 소켓 이벤트를 같이 해주면 안되는 이유는?
 * 구독과 발행의 역할을 명확하게 나누기 위해서.. 발행 API를 숨겨놓아서 좋을 이유가 없다.
 *
 * 1. 클라이언트가 구독한다. ('game-room')
 * 2. 클라이언트가 특정 액션을 한다.
 * 3. 클라이언트가 특정 액션을 완료 후 그것에 대한 메시지를 발행한다. ('game-room')
 */
server.listen(process.argv[2] || 8080);
