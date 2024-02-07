---
title: 原型相关
date: 2020/05/29
---

## 原型和原型链

在学习原型和原型链之前，我们需要首先掌握以下三个属性：

- `prototype`: 每一个函数都有一个特殊的属性，叫做**原型**(`prototype`)
- `constructor`: 相比于普通对象的属性，`prototype`**属性本身会有一个属性**`constructor`，该属性的值为`prototype`所在的函数
- `__proto__`: 每一个对象都有一个`__proto__`属性，该属性指向对象(实例)所属构造函数(类)的原型`prototype`

## prototype

函数的 `prototype` 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。

```js
function Person() {}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = "Kevin";
var person1 = new Person();
var person2 = new Person();
console.log(person1.name); // Kevin
console.log(person2.name); // Kevin
```

![原型](./images/proto1.png "prototype")

## **proto**

这是每一个 JavaScript 对象(除了 null )都具有的一个属性，叫`proto`，这个属性会指向该对象的原型。

```js
function Person() {}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

![__proto__](./images/proto2.png "__proto__")

## constructor

每个原型都有一个 `constructor` 属性指向关联的构造函数。

```js
function Person() {}
console.log(Person === Person.prototype.constructor); // true
```

![constructor](./images/proto3.png "constructor")

综上我们已经得出：

```js
function Person() {}

var person = new Person();

console.log(person.__proto__ == Person.prototype); // true
console.log(Person.prototype.constructor == Person); // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
```
![原型链](./images/proto4.png "原型链")

## new

`new`操作符的作用是创建一个实例，它做了以下几件事：

- 创建一个空对象，该对象的原型指向构造函数的原型
- 将构造函数的`this`指向该对象
- 执行构造函数的代码
- 如果构造函数返回一个对象，则返回该对象，否则返回创建的空对象

```javascript
function _new(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
  return typeof result === "object" ? result : obj;
}
```
