- 리피터: 신호를 증폭시킨다. (데이터와 잡음을 구분한다.), 물리계층

  - LAN 길이 연장

- 허브: 리피터와 비슷하다고한다. 다른 노드로 신호를 보내는데 사용 (리피터 기능을 포함하고 있는 경우가 많다.)

- 브리지: 데이터링크 계층에서 동작, 네트워크 카드의 MAC주소를 사용(물리주소), 라우팅기능 없음

  - 네트워크 카드의 하드웨어 주소에 의한 데이터프레임 전송

- 라우터: IP간의 네트워크를 연결, 인터넷과 연결할때.. (네트워크 계층)

  - 라우팅 기능이 있다. (static, dynamic)
  - IP사용
  - 네트워크 주소에 의해 데이터 패킷 전송

- 게이트웨이
  - 서로다른 통신 프로토콜을 사용하는 네트워크 사이에서 상호 연결을 제공한다. (응용계층)
  - 데이터 형식의 변환에 의한 데이터 전송

### 네트워크 7계층

- Application
- Presentation
- Session
- Transport
- Network
- Data Link
- Physical

OSI 서로 다른 기종의 통신을 위해 만들어둔 참조 모델 (규칙)

TTL: time to live 하나의 경로를 거칠때마다 1씩 값이 깎이며 0이되면 폐기

홉: 목적지 전의 중간 네트워크

---

ARP - 상대방 호스트의 IP 주소를 알고 데이터 통신을 위해 그 호스트의 물리주소를 알고자 할 때 사용하는 프로토콜

RARP - 물리주소만 알고 있는 호스트가 자신의 IP 주소를 찾을 때 사용되는 프로토콜

❗️ ICMP = 인터넷 계층 프로토콜!
ICMP - 인터넷에서 IP를 대신하여 오류 또는 제어 메시지를 제공하는 프로토콜

IGMP - IP 호스트가 어떤 멀티캐스트 그룹에 참가하고 있는지를 멀티캐스트 라우터에 통보하는 프로토콜

DHCP - IP 주소를 중앙에서 관리하고 개별 클라이언트들에게 자동으로 IP 주소를 할당해 주는 프로토콜
정적/동적으로 나뉜다.

1. Host Table
2. DNS (domain name system)
3. BOOTP (Bootstrap Protocol)
4. DHCP (Dynamic Host Configuration Protocol)
