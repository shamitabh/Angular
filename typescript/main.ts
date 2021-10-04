export {}

class A{

    // class attribute
    static company = 'TCS';

    // instance attribute
    protected full_name: string;

    constructor(name: string){
        this.full_name = name;
    }

    greet(){
        console.log(`Hello ${this.full_name} from ${A.company}`)
    }
}

let emp = new A('Amit Pal')
emp.c
// emp.greet()


class B extends A{
    age: number;

    constructor(name: string, age: number){
        super(name); // same as super(B, self).__init__(name) in python
        this.age = age;
    }

    message(){
        console.log(`${this.full_name} age is ${this.age} and I work in ${A.company}`)
        super.greet()
    }
}

let b = new B('gandu', 23);
b.message();

class C{
    hobby: string
    constructor(){
        this.hobby = 'sex';
    }

    action(){
        A.company
    }
}

let c = new C();