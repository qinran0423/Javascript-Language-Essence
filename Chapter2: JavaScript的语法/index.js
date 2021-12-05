// var str = 'this is a test'
// console.log(typeof str); // string

// console.log(typeof (str)) // string;

// console.log(typeof 'test!'); // string、

// ----
// var str = 'abcde'
// var obj = new String(str)


// function newToString() {
//   return 'hello world'
// }

// function func(val) {
//   val.toString = newToString
// }

// func(str)
// console.log(str); //abcde


// func(obj)
// console.log(String(obj)); // hello world

// ----
// 隐式声明
// function foo() {
//   value = 100;
// }

// foo()

// var value = 100
// function foo() {
//   value = 1000
// }

// foo()

// 解构
// var [x, y] = [1, 2]

// 模板字符串
// foo = tpl => console.log(typeof tpl, tpl instanceof Array, tpl);
// foo`xyz`
// object true ['xyz']

// TODO
// console.log(String.raw({ raw: ['', ',\nworld'] }, 'Hi'));
// // 等价于
// foo = tpl => String.raw(tpl, 'hi')
// console.log(foo`${1},
// world`);



// ----
// function foo(x, y = 100) {
//   console.log([x, y]);
// }

// foo('abc') // ['abc', 100]


// function foo(x = 'abc', y) {
//   console.log([x, y]);
// }

// foo(undefined, 'abc') // ['abc','abc']


// ----
// var str = 'hello'
// var obj = {}
// x = str || obj
// y = str && obj
// console.log(x, y);


// console.log(+'a');
// console.log(-0 === 0); // true
// console.log(NaN !== NaN); //true
// console.log(Object.is(-0, 0)); //false
// console.log(Object.is(NaN, NaN)); // true、


// ----
// var obj, str = 'abcdef'
// var obj1 = new String(str)
// var obj2 = obj = new String(str)

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

// console.log(obj == obj2); //true
// console.log(obj === obj2); // true

