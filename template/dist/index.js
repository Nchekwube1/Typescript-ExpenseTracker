"use strict";
var IF = document.querySelector(".IF");
var BA = document.querySelector(".BA");
var BD = document.querySelector(".BD");
var EF = document.querySelector(".EF");
var EA = document.querySelector(".EA");
var ED = document.querySelector(".ED");
var income = document.querySelector(".detincome");
var expense = document.querySelector(".detexpense");
var expArr = [];
var budArr = [];
var bal = document.querySelector(".mbal");
var inc = document.querySelector(".minc");
var exp = document.querySelector(".mexp");
var balance = function () {
    var bud = 0;
    var expe = 0;
    budArr.forEach(function (one) {
        bud += one.amt;
    });
    expArr.forEach(function (one) {
        expe += one.amt;
    });
    inc.innerText = bud.toString();
    exp.innerText = expe.toString();
    bal.innerText = (bud - expe).toString();
};
var setItem = function () {
    localStorage.setItem("expArr", JSON.stringify(expArr));
    localStorage.setItem("budArr", JSON.stringify(budArr));
};
var incomemapex = function () {
    if (budArr.length > 0) {
        balance();
        var mapper = budArr.forEach(function (each) {
            var id = each.id, amt = each.amt, desc = each.desc;
            var a = "\n      <div class=\"eachinc\">\n              <div class=\"moneyi\">\n                <div class=\"amount\">\n                  <h1>+$<span class=\"amt\">" + amt + "</span></h1>\n                </div>\n                <div class=\"description\"><h1>" + desc + "</h1></div>\n              </div>\n              <div class=\"eddeli\">\n                <div id=\"edit\" data-id =" + id + ">\n                  <svg\n                    class=\"esv\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z\"\n                    ></path>\n                  </svg>\n                </div>\n                <div id=\"del\" data-id =" + id + ">\n                  <svg\n                    class=\"esd\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"\n                    ></path>\n                    <path\n                      d=\"M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                    <path\n                      d=\"M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                  </svg>\n                </div>\n              </div>\n            </div>";
            income.innerHTML += a;
        });
    }
};
var expensemapex = function () {
    if (budArr.length > 0) {
        balance();
        var mapper = expArr.forEach(function (each) {
            var id = each.id, amt = each.amt, desc = each.desc;
            var a = "\n      <div class=\"eachexp\">\n              <div class=\"moneye\">\n                <div class=\"amount\">\n                  <h1>-$<span class=\"amte\">" + amt + "</span></h1>\n                </div>\n                <div class=\"descriptione\">\n                  <h1 class=\"expe\">" + desc + "</h1>\n                </div>\n              </div>\n              <div class=\"eddele\">\n                <div id=\"edite\" data-id =" + id + ">\n                  <svg\n                    class=\"esv\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z\"\n                    ></path>\n                  </svg>\n                </div>\n                <div id=\"dele\" data-id =" + id + ">\n                  <svg\n                    class=\"esd\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"\n                    ></path>\n                    <path\n                      d=\"M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                    <path\n                      d=\"M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                  </svg>\n                </div>\n              </div>\n            </div>";
            expense.innerHTML += a;
        });
    }
};
var getItem = function () {
    var e = JSON.parse(localStorage.getItem("expArr")) || [];
    var b = JSON.parse(localStorage.getItem("budArr")) || [];
    expArr = e;
    budArr = b;
    incomemapex();
    expensemapex();
};
getItem();
function uuid() {
    var diff = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "l",
        "k",
    ];
    var id = "";
    for (var i = 0; i < 9; i++) {
        id += diff[Math.floor(Math.random() * diff.length)];
    }
    return id;
}
IF.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = parseInt(BA.value);
    var des = BD.value;
    if (des == "") {
        BD.classList.add("err");
        setTimeout(function () {
            BD.classList.remove("err");
        }, 3000);
    }
    else {
        var ob = {
            id: uuid(),
            amt: val,
            desc: des,
        };
        budArr.push(ob);
        balance();
        setItem();
    }
    BA.value = "";
    BD.value = "";
    income.innerHTML = "";
    incomemapex();
});
EF.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = parseInt(EA.value);
    var des = ED.value;
    if (des == "") {
        ED.classList.add("err");
        setTimeout(function () {
            ED.classList.remove("err");
        }, 3000);
    }
    else {
        var ob = {
            id: uuid(),
            amt: val,
            desc: des,
        };
        expArr.push(ob);
        balance();
        setItem();
    }
    EA.value = "";
    ED.value = "";
    expense.innerHTML = "";
    expensemapex();
});
income.addEventListener("click", function (e) {
    var a = e.target;
    if (a.id === "edit") {
        var ied_1 = a.dataset.id;
        var newArr = budArr.filter(function (each) { return each.id !== ied_1; });
        var editArr = budArr.filter(function (each) { return each.id === ied_1; });
        budArr = newArr;
        var _a = editArr[0], id = _a.id, amt = _a.amt, desc = _a.desc;
        balance();
        setItem();
        BA.value = amt.toString();
        BD.value = desc;
        income.innerHTML = "";
        var mapper = budArr.forEach(function (each) {
            var id = each.id, amt = each.amt, desc = each.desc;
            var a = "\n      <div class=\"eachinc\">\n              <div class=\"moneyi\">\n                <div class=\"amount\">\n                  <h1>+$<span class=\"amt\">" + amt + "</span></h1>\n                </div>\n                <div class=\"description\"><h1>" + desc + "</h1></div>\n              </div>\n              <div class=\"eddeli\">\n                <div id=\"edit\" data-id =" + id + ">\n                  <svg\n                    class=\"esv\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z\"\n                    ></path>\n                  </svg>\n                </div>\n                <div id=\"del\" data-id =" + id + ">\n                  <svg\n                    class=\"esd\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"\n                    ></path>\n                    <path\n                      d=\"M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                    <path\n                      d=\"M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                  </svg>\n                </div>\n              </div>\n            </div>";
            income.innerHTML += a;
        });
    }
    else if (a.id === "del") {
        var id_1 = a.dataset.id;
        var newArr = budArr.filter(function (each) { return each.id !== id_1; });
        budArr = newArr;
        balance();
        setItem();
        income.innerHTML = "";
        var mapper = budArr.forEach(function (each) {
            var id = each.id, amt = each.amt, desc = each.desc;
            var a = "\n      <div class=\"eachinc\">\n              <div class=\"moneyi\">\n                <div class=\"amount\">\n                  <h1>+$<span class=\"amt\">" + amt + "</span></h1>\n                </div>\n                <div class=\"description\"><h1>" + desc + "</h1></div>\n              </div>\n              <div class=\"eddeli\">\n                <div id=\"edit\" data-id =" + id + ">\n                  <svg\n                    class=\"esv\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z\"\n                    ></path>\n                  </svg>\n                </div>\n                <div id=\"del\" data-id =" + id + ">\n                  <svg\n                    class=\"esd\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"\n                    ></path>\n                    <path\n                      d=\"M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                    <path\n                      d=\"M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                  </svg>\n                </div>\n              </div>\n            </div>";
            income.innerHTML += a;
        });
    }
});
expense.addEventListener("click", function (e) {
    var a = e.target;
    if (a.id === "edite") {
        var ied_2 = a.dataset.id;
        var newArr = expArr.filter(function (each) { return each.id !== ied_2; });
        var editArr = expArr.filter(function (each) { return each.id === ied_2; });
        expArr = newArr;
        var _a = editArr[0], id = _a.id, amt = _a.amt, desc = _a.desc;
        balance();
        setItem();
        EA.value = amt.toString();
        ED.value = desc;
        expense.innerHTML = "";
        var mapper = expArr.forEach(function (each) {
            var id = each.id, amt = each.amt, desc = each.desc;
            var a = "\n      <div class=\"eachexp\">\n              <div class=\"moneye\">\n                <div class=\"amount\">\n                  <h1>-$<span class=\"amte\">" + amt + "</span></h1>\n                </div>\n                <div class=\"descriptione\">\n                  <h1 class=\"expe\">" + desc + "</h1>\n                </div>\n              </div>\n              <div class=\"eddele\">\n                <div id=\"edite\" data-id =" + id + ">\n                  <svg\n                    class=\"esv\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z\"\n                    ></path>\n                  </svg>\n                </div>\n                <div id=\"dele\" data-id =" + id + ">\n                  <svg\n                    class=\"esd\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"\n                    ></path>\n                    <path\n                      d=\"M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                    <path\n                      d=\"M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                  </svg>\n                </div>\n              </div>\n            </div>";
            expense.innerHTML += a;
        });
    }
    else if (a.id === "dele") {
        var ied_3 = a.dataset.id;
        var newArr = expArr.filter(function (each) { return each.id !== ied_3; });
        var editArr = expArr.filter(function (each) { return each.id === ied_3; });
        expArr = newArr;
        balance();
        setItem();
        expense.innerHTML = "";
        var mapper = expArr.forEach(function (each) {
            var id = each.id, amt = each.amt, desc = each.desc;
            var a = "\n      <div class=\"eachexp\">\n              <div class=\"moneye\">\n                <div class=\"amount\">\n                  <h1>-$<span class=\"amte\">" + amt + "</span></h1>\n                </div>\n                <div class=\"descriptione\">\n                  <h1 class=\"expe\">" + desc + "</h1>\n                </div>\n              </div>\n              <div class=\"eddele\">\n                <div id=\"edite\" data-id =" + id + ">\n                  <svg\n                    class=\"esv\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z\"\n                    ></path>\n                  </svg>\n                </div>\n                <div id=\"dele\" data-id =" + id + ">\n                  <svg\n                    class=\"esd\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 24 24\"\n                    fill=\"currentColor\"\n                    xmlns=\"../../external.html?link=http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      d=\"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z\"\n                    ></path>\n                    <path\n                      d=\"M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                    <path\n                      d=\"M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z\"\n                    ></path>\n                  </svg>\n                </div>\n              </div>\n            </div>";
            expense.innerHTML += a;
        });
    }
});
