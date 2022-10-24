class A {
    a(this: any, password: any) {
        console.log(password);
    }
}

new A().a('ss');
