let users = {
    firstname: 'James',
    id: 123,
    num1: 10,
    a: 15,
    b:25,
}

function displayName(c,d) {
    console.log(this);
    // console.log(this.username)
    console.log(this.id);
    console.log(this.a+this.b+c+d);
    // console.log(this.firstname+lastname)
}

console.log(displayName.bind(users, [10, 20]));
