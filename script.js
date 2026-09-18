function greet() {
  console.log("Hello, world!");
}
greet();

// 定义一个函数, 用于计算两个数的乘积
function multiply(a, b) {
  return a * b;
}

// arrow function:  箭头函数, 用于定义匿名函数
// 语法:  (参数1, 参数2, ...) => 函数体
const multiplyResult = (a, b) => a * b;

console.log(multiply(3, 4));
console.log(multiplyResult(5, 6));

// 定义一个函数, 用于计算一个数的平方, 语法:  参数 => 函数体. 参数两边无须用括号.
const squareNum = (num) => num * num;
console.log(squareNum(5));

// 没有参数时，必须保留括号
const sayHi = () => "Hi!";
console.log(sayHi()); // Hi!

//数组： Array
//创建数组
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

//访问数组
console.log(fruits[0]); // apple

//数组长度
console.log(fruits.length); // 3

//修改数组元素
fruits[0] = "Orange";
console.log(fruits); // ["orange", "banana", "Cherry"]

//遍历数组元素
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log("I like " + fruit);
}
//数组方法： push, map, filter, reduce, every, some, find, findIndex
//push():  向数组末尾添加一个或多个元素, 并返回新的数组长度.
let numbers = [1, 2, 3, 4, 5];
numbers.push(8);
console.log(numbers); // [1, 2, 3, 4, 5, 8]
//pop():  删除数组最后一个元素, 并返回该元素.
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]
//map():  对数组中的每个元素执行一个函数, 并返回一个新的数组.
let doubleNum = numbers.map((num) => num * 2);
console.log("doubleNum: " + doubleNum); // [2, 4, 6, 8, 10]
//filter():  筛选对数组中的每个元素执行一个函数, 并返回一个新的数组.
let evenNum = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers: " + evenNum); // [2, 4]
//reduce():  对数组中的每个元素执行一个函数, 并返回一个累计值.
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("sum: " + sum); // 15

//用数组存储项目数据，每个项目数据包含项目名称、项目描述、项目图片、项目链接。
const projects = [
  {
    name: "Project 1",
    description: "This is a brief description of Project 1.",
  },
  {
    name: "Project 2",
    description: "This is a brief description of Project 2.",
  },
  {
    name: "Project 3",
    description: "This is a brief description of Project 3.",
  },
];
// means template literal,意思是模板字面值, 可以在模板字符串中嵌入变量. .join("")是将数组中的元素用空字符串连接起来
// 用map方法遍历projects数组, 对每个项目数据执行一个函数, 并返回一个新的数组.
//留意： => {...}返回多行字符串需要return 关键字来返回值，而隐式返回是 => ... 则直接返回表达式的结果；
const projectCardsHTML = projects
  .map((project) => {
    return `
    <article class="project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
    </article>`;
  })
  .join("");

//选定项目卡片-container元素, 并将项目卡片HTML内容添加到该元素中.
const container = document.getElementById("project-container");
if (container) {
  container.innerHTML = projectCardsHTML;
}

console.log("Projects rendered successfully!");

//footer年份不写死. 关注：  if (footerYear) 是defensive programming写法，确保footerYear元素存在时才执行.
// 否则会报错, 因为footerYear元素不存在, 无法调用innerHTML属性.
// ====== 动态更新页脚年份 ======
const footerYear = document.querySelector("footer p");
if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.innerHTML = `&copy; ${year} My Portfolio. All rights reserved.`;
  console.log("Footer year updated to: " + year);
}

// ====== 导航链接点击事件 2026-09-14 12:35:59 ======
// 为导航链接添加点击事件, 点击后滚动到对应页面.
const navLinks = document.querySelectorAll("nav ul li a"); //选择所有导航链接元素

navLinks.forEach((link) => {
  // 遍历每个导航链接元素
  link.addEventListener("click", function (e) {
    //为每个导航链接添加点击事件
    e.preventDefault(); // 阻止默认行为, 避免跳转到新页面.
    const targetId = this.getAttribute("href"); //获取导航链接的href属性值, 即目标元素的id.
    const targetSection = document.querySelector(targetId); //根据目标元素的id, 查找对应的元素.
    targetSection.scrollIntoView({ behavior: "smooth" }); //将目标元素滚动到视口, 并平滑滚动.
  });
});

//
// ========== 表单提交给出提示 2026-09-14 12:41:31==========
// 为联系表单添加提交事件, 提交时阻止默认行为, 并显示提示信息.
// 注意：  if (contactForm) 是defensive programming写法，确保contactForm元素存在时才执行.
// 否则会报错, 因为contactForm元素不存在, 无法调用addEventListener方法.
const contactForm = document.querySelector("#contact form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameValue = document.getElementById("name").value;
    alert(`谢谢你，${nameValue}！你的消息已收到。`);
    contactForm.reset();
  });
}

// ========== 深色模式切换按钮  2026-09-14 14:05:34==========
// 为深色模式切换按钮添加点击事件, 点击后切换深色模式.
// 注意：  if (themeToggleBtn) 是defensive programming写法，确保themeToggleBtn元素存在时才执行.
// 否则会报错, 因为themeToggleBtn元素不存在, 无法调用addEventListener方法.
const themeToggleBtn = document.getElementById("theme-toggle"); //选择深色模式切换按钮元素
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode"); // 切换深色模式类名, 给body元素添加或移除dark-mode类名.
  });
}

//重新测试array相关方法
let numArray = [1, 2, 3, 4, 5];

numArray.push(8);
console.log(numArray); // [1, 2, 3, 4, 5, 8]

numArray.pop();
console.log(numArray); // [1, 2, 3, 4, 5]

let addNum = numArray.map((num) => num + 1);
console.log(addNum); // [2, 3, 4, 5, 6]

let filterNum = numArray.filter((num) => num % 2 === 0);
console.log(filterNum); // [2, 4]

let numSum = numArray.reduce((acc, cur) => acc + cur, 0);
console.log(numSum); // 25

// ========== 异步编程==========

// console.log("The first message!");

// setTimeout(function () {
//   console.log("The second message!");
// }, 2000);

// console.log("The third message!");

//==========回调函数与异步编程==========

// ========== 回调函数callback及callback地狱 ==========
// function fetchUserData(callback) {
//   console.log("正在请求用户数据...");
//   setTimeout(function () {
//     const userData = { name: "Frank", age: 25 };
//     callback(userData);
//   }, 2500);
// }

// fetchUserData(function (data) {
//   console.log("callback测试——拿到数据了：", data);
//   console.log("你好，" + data.name);
// });

// console.log("这行代码会先执行，不会等数据回来");
//  ========== Promise ==========
function fetchUserDataPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const success = false; // 模拟请求成功
      if (success) {
        resolve({ name: "Frank", age: 25 });
      } else {
        reject("请求失败");
      }
    }, 1500);
  });
}

fetchUserDataPromise()
  .then(function (data) {
    console.log("Promise测试——拿到数据了：", data);
    console.log("你好，" + data.name);
  })
  .catch(function (error) {
    console.log("出错了：", error);
  });

console.log("这行代码依然会先执行");

// ========== fetch+async/await ==========
//=== 测试fetch ====
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("拿到用户数据： ", data);
//     console.log("用户名： " + data.username);
//   })
//   .catch(function (error) {
//     console.log("请求出错了：", error);
//   });

// console.log("fetch测试： 这行代码依然会先执行，因为fetch是异步的");
//=== 测试async/await ====   在vscode,如何临时禁用自动补全功能呢？
// async function getUserData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   console.log("async/await测试——拿到用户数据： ", data);
//   console.log("邮件地址： " + data.email);
// }

// getUserData();
// console.log(
//   "async/await测试： 这行代码依然会先执行，因为getUserData内部是异步的",
// );
// ========== 测试async/await 报错处理==========
async function getUserDataSafe() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/10",
    );
    if (!response.ok) {
      throw new Error(
        "async/await错误 === 请求失败，状态码：" + response.status,
      );
    }
    const data = await response.json();
    console.log("async/await错误 === 拿到用户数据： ", data);
    console.log("async/await错误 === 邮件地址： " + data.email);
  } catch (error) {
    console.log("async/await错误 === 请求出错了：", error.message);
  } finally {
    console.log("async/await错误 ===（无论成功或失败，都会执行）");
  }
}
getUserDataSafe();

// ========== D11综合练习：渲染真实数据 ==========
async function renderLatestPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3",
    );
    if (!response.ok) {
      throw new Error("请求失败， 状态码：" + response.status);
    }
    const posts = await response.json();
    const postsHTML = posts
      .map((post) => {
        return `
      <article class="project-card">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </article>
      `;
      })
      .join("");
    console.log("生成的HTML片段： ", postsHTML);
  } catch (error) {
    console.log("渲染失败：", error.message);
  }
}

renderLatestPosts();
