# typeORM 익히기

const user = User.of(...);
user.save();

이렇게 쓰지 않으려면 repository를 이용
repository에 좀더 간편하게 인자를 넣기 위해 클래스 활용해야함.
하지만 User.of(...) 이런 방식은 entity를 직접 의존하므로 강결합이 됨.
따라서 interface를 이용하거나, entity가 아닌 비즈니스 로직에서 사용될 entity와 1:1 매칭되는 클래스가 필요함
이 클래스를 만들면 변수도 캡슐화 가능