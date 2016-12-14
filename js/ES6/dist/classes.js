"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task() {
  _classCallCheck(this, Task);

  this.title = "\u0418\u0437\u0443\u0447\u0438\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u044B";
  console.log("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
};

var objectTask = new Task();

console.log(typeof objectTask === "undefined" ? "undefined" : _typeof(objectTask));
console.log(objectTask.title);