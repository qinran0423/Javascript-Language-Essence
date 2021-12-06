## 变量的数据类型

### JavaScript 有 6 种声明标识符的方法

var、const、let、function、class、import

### JavaScript 的 7 种基本数据类型

- undefined（未定义）:未声明的或者声明过但未赋值的变量，其值会是 undefined.也可以显式或者隐式底给一个变量赋值为 undefined
- number（数值）:除赋值操作之外，只有数值与数值的运算结果是数值；函数/方法的返回值或对象的属性值可以是数值
- string（字符串）:可以直接读取指定位置的单个字符，但不能修改
- boolean（布尔值）:true/false
- symbol（符号
- function（函数）
- object（对象）:基于原型继承与类继承的面向对象模型

### 值类型与引用类型

- 一般表达式运算的结果总是值
- 函数/方法调用的结果可以返回值类型或者引用
- 值与引用、值与值之间即使相等（==），也不一定严格相等（===）
- 两个引用之间如果相等(==),则一定是严格相等（===）

## 变量声明

显示声明，隐式声明

#### 块级作用域的变量声明与一般 var 声明

- var 声明的变量，其作用域为当前函数、模块或全局；let 声明的变量，其作用域总是在当前代码块
- 在同一个代码块中，可以用 var 来多次声明变量名，let 却只能声明一次，覆盖一个已经声明的 let 变量会导致语法错误
- 用户代码可以在声明语句之前使用所声明的 var 变量，这时该变量的值是 undefined；let 声明的变量必须先声明后使用，声明语句之前的代码引用了 let 变量会触发异常，这也会导致 typeof 成为一个不安全的运算

#### 模板字符串

模板字符串本质上来说是一个字面量的引用---- 该字面量在 JavaScript 内部表达为一个对象或者数组

```js
foo = tpl => console.log(typeof tpl, tpl instanceof Array, ref = tpl);
foo`xyz`
// object true ['xyz']
```

#### 数值字面量

- 如果以0x或者0X开始，则表明是一个十六进制数值
- 如果以0o或者0O开始，则表明是一个八进制数值
- 如果以0b或者0B开始，则表明是一个二进制数值
- 在其他情况下，表明是一个十进制整数或浮点数

### 其他声明

#### 常量声明

const 

变量表明相应的数据是可修改的，而常量表明它不可修改

#### 符号声明

Symbol 

符号没有字面量声明的形式，由于符号是值而非对象，所以不能适应new运算符来创建

#### 函数声明

javascript中，函数是一种数据类型，所以函数声明是变量声明的一种特殊形式

## 表达式运算

#### 逻辑运算

|| &&

- 运算符会将操作数隐式转化为布尔值，以进行布尔运算
- 运算过程（与普通布尔运算一样）是支持布尔短路的

#### 等值检测

###### 等值检测中”相等“的运算规则

| 类型                     | 运算规则                                                     |
| ------------------------ | ------------------------------------------------------------ |
| 值类型与引用类型进行比较 | 将引用类型的数据转成为与值类型数据相同的数据，再进行“数据等值”比较 |
| 两个值类型进行比较       | 转成相同数据类型的值进行“数据等值”比较                       |
| 两个引用类型进行比较     | 比较引用（的地址）                                           |

在三种值类型（数据、布尔值、字符串），如果两个被比较的值类型不同，那么：

- 有任何一个是数字时，会将另一个转换成数字进行比较
- 有任何一个是布尔值，将被转换为数字进行比较
- 有任何一个是对象（或函数），将调用该对象的valueOf()方法来将其转换为值数据进行比较，且在多数情况下该值数据作为数字值处理
- 按照特定规则返回比较结果，例如： undefined与null总是相等



###### 等值检测中”严格相等“运算规则

| 类型                     | 运算规则                                                     |
| ------------------------ | ------------------------------------------------------------ |
| 值类型与引用类型进行比较 | 必然”不严格相等“                                             |
| 两个值类型进行比较       | 如果数据类型不同，必然”不严格相等“；否则按照等值检测中相等的运算规则进行比较 |
| 两个引用类型进行比较     | 比较引用（的地址）                                           |

- NaN不等于自身
- 符号可以转换为true 但不等值true
- 即使字面量相同的引用类型，也是不严格相等的