// 클래스 안에서 arrow function의 차이

class Arrow {
  #name;
  constructor(name) {
    this.#name = name
  }
  log() {
    console.log(this.#name, this)
  }
}

class Functions {
  #name;
  constructor(name) {
    this.#name = name
  }
  log() {
    console.log(this.#name, this)
  }
}


class Any {
  log() {

  }
}

const a = new Any();
// arrow가 원본 클래스에 고정?
a.log = new Arrow().log;
a.log();

const b = new Any();
b.log = Functions.log;
b.log();

function a() {
  
}