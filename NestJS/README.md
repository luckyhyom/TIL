### Custom Provider

생성자에 주입할 객체를 커스텀하여 만든다.

- useValue
  - 단순 데이터를 주입 (string, number, 등..)
- useClass
  - 존재하는 서비스 클래스를 동적으로 선택 (클래스만)
- useFactory
  - 값이나 클래스 동적으로 생성하여 주입
  - useClass처럼 이미 존재하는 클래스를 선택도 가능 (값도 가능)
