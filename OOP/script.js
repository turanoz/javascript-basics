// Constructor
/*object literals
let turan={
    name:"turan",
    dt:1999,
    job:"engineer"
}

array
let numbers=[1,2,3];

function Person(ad, dt, meslek) {
    this.ad = ad;
    this.dt = dt;
    this.meslek = meslek;
    this.yasHesapla=function (){
        return 2021-this.dt;
    }
}

let Person = function (ad, dt, meslek) {
    this.ad = ad;
    this.dt = dt;
    this.meslek = meslek;
    this.yasHesapla = function () {
        return 2021 - this.dt;
    }
}

let turan = new Person("Turan", 1999, "Mühendis");
let ayse = new Person("Ayse", 1998, "Aşçı");

console.log(turan.ad);
console.log(turan.dt);
console.log(turan.meslek);
console.log(turan.yasHesapla());

console.log("************************")

console.log(ayse.ad);
console.log(ayse.dt);
console.log(ayse.meslek);
console.log(ayse.yasHesapla());*/


//Prototype
/*

let Person=function (ad,dt,job){
    this.ad = ad;
    this.dt = dt;
    this.job = job;
}
Person.prototype.yasHesapla=function (){
    return 2021 - this.dt;
}

let turan = new Person("emel", 1999, "teacher");

console.log(turan);
console.log(turan.yasHesapla());

let Employee=function (name,salary){
    if (!(this instanceof Employee)) {
        return new Employee(name,salary);
    }
    this.name=name;
    this.salary=salary;

};
Employee.prototype.hesapla=function (){
    let ay=new Date().getMonth()+1;
    let maas=this.salary*ay;
    let vergi=0;
    if (maas<=20000){
        vergi=maas*0.2;
    }else if (maas>20000||maas<30000){
        vergi=maas*0.25;
    }else{
        vergi=maas*0.27;
    }

    return{
        vergi:vergi,
        netmaas:maas-vergi
    };

};
let turan=Employee("turan",10000);

console.log(turan);
*/

//object create

/*let personProto={
    calculateAge:function (){
        return 2021-this.dt;
    }
};
let yigit=Object.create(personProto);
yigit.name='Yiğit';
yigit.dt=2010;
yigit.job='student';

let emel=Object.create(personProto,{
    name:{value:"emel"},
    dt:{value:1989},
    job:{value:"teacher"}
});

console.log(yigit);
console.log(yigit.calculateAge());
console.log("***************************");
console.log(emel);
console.log(emel.calculateAge());*/

//Prototypal Inheritance

/*
let Person = function (ad, dt, meslek) {
    this.ad = ad;
    this.dt = dt;
    this.meslek = meslek;
    this.yasHesapla = function () {
        return 2021 - this.dt;
    }
}
Person.prototype.yasHesapla = function () {
    return 2021 - this.dt;
}

let Teacher = function (ad, dt, meslek, konu) {
    Person.call(this, ad, dt, meslek);
    this.konu = konu;
};
// Inherit the Person prototype methods

Teacher.prototype=Object.create(Person.prototype);

// set Teacher Constructor

Teacher.prototype.constructor=Teacher;

let emel=new Teacher("Emel",1989,"Teacher","Math");
console.log(emel);
console.log(emel.yasHesapla());*/

/*
let Person = function (ad, dt, meslek) {
    this.ad = ad;
    this.dt = dt;
    this.meslek = meslek;
}
Person.prototype.Introduce = function () {
    return "Hoşgeldin " + this.ad;
}

let Student = function (ad, dt, meslek, number) {
    Person.call(this, ad, dt, meslek);
    this.number = number;
}

let Teacher = function (ad, dt, meslek, branch) {
    Person.call(this, ad, dt, meslek);
    this.branch = branch;
}

let Headmaster = function (ad, dt, meslek, branch) {
    Teacher.call(this, ad, dt, meslek, branch);
}

//Student
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
    console.log("My student number is ", this.number);
}
//Teacher
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function () {
    console.log("I teach ", this.branch);
}
//Headmaster
Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

Headmaster.prototype.shareTask = function () {
    console.log("Ive already shared all the work");
}
let Turan = new Person("Turan", 1999, "Mühendis");
let Mustafa = new Teacher("Mustafa", 2001, "Öğretmen", "Math");
let Ozlem = new Headmaster("Özlem", 1998, "Müdür", "Music");
let Gulsen = new Student("Gülşen", 2011, "Öğrenci", 1325);

console.log(Ozlem.Introduce());*/

// Demo: Numeric Range

/*
var num={
    min:0,
    max:100,
    checkNumericRange:function (value){
        if (typeof value!=="number"){
            return false;
        }else {
            return value >= this.min && value <= this.max;
        }
    }
}
console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));

var num1={min: 50,max: 60};

console.log(num.checkNumericRange.call(num1,55));
console.log(num.checkNumericRange.apply(num1,[55]));
var checkNumber=num.checkNumericRange.bind(num1);

console.log(checkNumber(65));*/

//Error Handling

/*
//ReferenceError,TypeError,SyntaxError,URIError

//Error

var user={
    name:"Turan"
}

try{
    // console.log(myFunction());
    if (!user.email)
    {
        throw new Error("User has no email")
    }
    console.log(user.email);

}
catch (e){
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
}
finally {
    console.log("finally block");
    //hertürlü çalışır
}

*/
