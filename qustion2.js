//  function(fn1, fn2, a, b, c) {
//     fn1(a, b, c);
//     fn2(a,b);
//     return function(x, y, z){
//         console.log(x+y+z);
//     }
// }

// function test(fn1, fn2, a, b, c) {
//   fn1(a, b, c);
//   fn2(a, b);
//   return function (x, y, z) {
//     console.log(x + y + z);
//   };
// }

// let ans = test(
//   function (a, b, c) {
//     console.log("Sum", a + b + c);
//   },
//   function (a, b) {
//     console.log("Sum", a + b);
//   },
//   10,
//   20,
//   30
// );
// ans(100, 200, 300);

//  3. function(fn1, fn2, a, b) {
//     fn1(a, b, fn2);
//     return function(x, y, z){
//         console.log(x*y*z);
//     }
// }

// function test(fn1, fn2, a, b) {
//   fn1(a, b, fn2);
//   return function (x, y, z) {
//     console.log(x * y * z);
//   };
// }

// let ans = test(
//   function (a, b, fn2) {
//     fn2(a, b);
//   },
//   function (a, b) {
//     console.log(a + b);
//   },
//   10,
//   20
// );
// ans(10, 10, 10);

//  function(fn1, fn2, fn3, a) {
//     fn1(a, fn3, fn2);
//     return function(x, y, z){
//         return x+y+z;
//     }
// }

// function test(fn1, fn2, fn3, a) {
//   fn1(a, fn3, fn2);
//   return function (x, y, z) {
//     return x + y + z;
//   };
// }

// let ans = test(
//   function (a, fn3, fn2) {
//     fn3(a);
//     fn2(a);
//   },
//   function (a) {
//     console.log(a * 5);
//   },
//   function (a) {
//     console.log(a * 10);
//   },
//   10
// );
// console.log(ans(10, 20, 30));

// let interval = setInterval(function () {
//   console.log("Hello from setInterval");
// }, 1000);

// setTimeout(function () {
//   clearInterval(interval);
// }, 10000);

// function test(fn1, fn2, a, b) {
//   fn1();
//   fn2(a, b);
//   return function () {
//     console.log("Hello");
//   };
// }
// let ans = test(
//   function () {
//     console.log("Fanction1");
//   },
//   function (a, b) {
//     console.log("sum", a, b);
//   },
//   30,
//   50
// );
// ans();
////////////////////////////////////////////////
// function test(fn1, fn2, a, b) {
//     fn1(a, b, fn2);
//     return function (x, y, z) {
//       console.log(x * y * z);
//     };
//   }

//   let ans = test(
//     function (a, b, fn2) {
//       fn2(a, b);
//     },
//     function (a, b) {
//       console.log(a + b);
//     },
//     10,
//     20
//   );
//   ans(10, 10, 10);

// let text = prompt("What do you print ?");
// let count = Number(prompt("How many times do you want to print it?"));
// let frequency = Number(prompt("What is the frequency?"));
// let interval = setInterval(function () {
//   console.log(text);
// }, frequency * 1000);
// setTimeout(function () {
//   clearInterval(interval);
// }, count * frequency * 1000);

for (let i = 10; i >= 1; i--) {
  for (let j = 0; j <= i; j++) {
    str = +"*";
  }
  str += "\n";
}
console.log(str);
