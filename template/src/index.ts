let IF = document.querySelector(".IF") as HTMLFormElement;
let BA = document.querySelector(".BA") as HTMLInputElement;
let BD = document.querySelector(".BD") as HTMLInputElement;
let EF = document.querySelector(".EF") as HTMLFormElement;
let EA = document.querySelector(".EA") as HTMLInputElement;
let ED = document.querySelector(".ED") as HTMLInputElement;
const income = document.querySelector(".detincome") as HTMLDivElement;
const expense = document.querySelector(".detexpense") as HTMLDivElement;
let expArr: eachObj[] = [];
let budArr: eachObj[] = [];

let bal = document.querySelector(".mbal") as HTMLSpanElement;
let inc = document.querySelector(".minc") as HTMLSpanElement;
let exp = document.querySelector(".mexp") as HTMLSpanElement;

interface objProp {
	id: string;
	amt: number;
	desc: string;
}

type eachObj = objProp;
const balance = () => {
	let bud = 0;
	let expe = 0;
	budArr.forEach((one) => {
		bud += one.amt;
	});
	expArr.forEach((one) => {
		expe += one.amt;
	});
	inc.innerText = bud.toString();
	exp.innerText = expe.toString();
	bal.innerText = (bud - expe).toString();
};
const setItem = () => {
	localStorage.setItem("expArr", JSON.stringify(expArr));
	localStorage.setItem("budArr", JSON.stringify(budArr));
};

const incomemapex = () => {
	if (budArr.length > 0) {
		balance();
		const mapper = budArr.forEach((each) => {
			let { id, amt, desc } = each;

			const a = `
      <div class="eachinc">
              <div class="moneyi">
                <div class="amount">
                  <h1>+$<span class="amt">${amt}</span></h1>
                </div>
                <div class="description"><h1>${desc}</h1></div>
              </div>
              <div class="eddeli">
                <div id="edit" data-id =${id}>
                  <svg
                    class="esv"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
                    ></path>
                  </svg>
                </div>
                <div id="del" data-id =${id}>
                  <svg
                    class="esd"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"
                    ></path>
                    <path
                      d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                    <path
                      d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>`;
			income.innerHTML += a;
		});
	}
};

const expensemapex = () => {
	if (budArr.length > 0) {
		balance();
		const mapper = expArr.forEach((each) => {
			let { id, amt, desc } = each;

			const a = `
      <div class="eachexp">
              <div class="moneye">
                <div class="amount">
                  <h1>-$<span class="amte">${amt}</span></h1>
                </div>
                <div class="descriptione">
                  <h1 class="expe">${desc}</h1>
                </div>
              </div>
              <div class="eddele">
                <div id="edite" data-id =${id}>
                  <svg
                    class="esv"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
                    ></path>
                  </svg>
                </div>
                <div id="dele" data-id =${id}>
                  <svg
                    class="esd"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"
                    ></path>
                    <path
                      d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                    <path
                      d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>`;
			expense.innerHTML += a;
		});
	}
};

const getItem = () => {
	const e = JSON.parse(localStorage.getItem("expArr")) || [];
	const b = JSON.parse(localStorage.getItem("budArr")) || [];
	expArr = e;
	budArr = b;

	incomemapex();
	expensemapex();
};
getItem();

type one = {
	id: string;
	amt: number;
	desc: string;
};

function uuid() {
	let diff: string[] = [
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
	let id: string = "";

	for (let i = 0; i < 9; i++) {
		id += diff[Math.floor(Math.random() * diff.length)];
	}
	return id;
}

IF.addEventListener("submit", (e) => {
	e.preventDefault();
	let val = parseInt(BA.value);
	let des: string = BD.value;
	if (des == "") {
		BD.classList.add("err");
		setTimeout(() => {
			BD.classList.remove("err");
		}, 3000);
	} else {
		let ob: one = {
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

EF.addEventListener("submit", (e) => {
	e.preventDefault();

	let val = parseInt(EA.value);
	let des: string = ED.value;
	if (des == "") {
		ED.classList.add("err");
		setTimeout(() => {
			ED.classList.remove("err");
		}, 3000);
	} else {
		let ob: one = {
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

income.addEventListener("click", (e) => {
	let a = e.target as HTMLElement;
	if (a.id === "edit") {
		let ied = a.dataset.id;

		const newArr = budArr.filter((each) => each.id !== ied);
		const editArr = budArr.filter((each) => each.id === ied);
		budArr = newArr;
		const { id, amt, desc } = editArr[0];
		balance();
		setItem();
		BA.value = amt.toString();
		BD.value = desc;

		income.innerHTML = "";
		const mapper = budArr.forEach((each) => {
			let { id, amt, desc } = each;
			const a = `
      <div class="eachinc">
              <div class="moneyi">
                <div class="amount">
                  <h1>+$<span class="amt">${amt}</span></h1>
                </div>
                <div class="description"><h1>${desc}</h1></div>
              </div>
              <div class="eddeli">
                <div id="edit" data-id =${id}>
                  <svg
                    class="esv"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
                    ></path>
                  </svg>
                </div>
                <div id="del" data-id =${id}>
                  <svg
                    class="esd"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"
                    ></path>
                    <path
                      d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                    <path
                      d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>`;
			income.innerHTML += a;
		});
	} else if (a.id === "del") {
		let id = a.dataset.id;
		const newArr = budArr.filter((each) => each.id !== id);

		budArr = newArr;
		balance();
		setItem();
		income.innerHTML = "";
		const mapper = budArr.forEach((each) => {
			let { id, amt, desc } = each;

			const a = `
      <div class="eachinc">
              <div class="moneyi">
                <div class="amount">
                  <h1>+$<span class="amt">${amt}</span></h1>
                </div>
                <div class="description"><h1>${desc}</h1></div>
              </div>
              <div class="eddeli">
                <div id="edit" data-id =${id}>
                  <svg
                    class="esv"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
                    ></path>
                  </svg>
                </div>
                <div id="del" data-id =${id}>
                  <svg
                    class="esd"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"
                    ></path>
                    <path
                      d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                    <path
                      d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>`;
			income.innerHTML += a;
		});
	}
});

expense.addEventListener("click", (e) => {
	let a = e.target as HTMLElement;
	if (a.id === "edite") {
		let ied = a.dataset.id;
		const newArr = expArr.filter((each) => each.id !== ied);
		const editArr = expArr.filter((each) => each.id === ied);
		expArr = newArr;
		const { id, amt, desc } = editArr[0];
		balance();
		setItem();

		EA.value = amt.toString();
		ED.value = desc;

		expense.innerHTML = "";
		const mapper = expArr.forEach((each) => {
			let { id, amt, desc } = each;

			const a = `
      <div class="eachexp">
              <div class="moneye">
                <div class="amount">
                  <h1>-$<span class="amte">${amt}</span></h1>
                </div>
                <div class="descriptione">
                  <h1 class="expe">${desc}</h1>
                </div>
              </div>
              <div class="eddele">
                <div id="edite" data-id =${id}>
                  <svg
                    class="esv"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
                    ></path>
                  </svg>
                </div>
                <div id="dele" data-id =${id}>
                  <svg
                    class="esd"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"
                    ></path>
                    <path
                      d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                    <path
                      d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>`;
			expense.innerHTML += a;
		});
	} else if (a.id === "dele") {
		let ied = a.dataset.id;

		const newArr = expArr.filter((each) => each.id !== ied);
		const editArr = expArr.filter((each) => each.id === ied);
		expArr = newArr;

		balance();
		setItem();

		expense.innerHTML = "";
		const mapper = expArr.forEach((each) => {
			let { id, amt, desc } = each;

			const a = `
      <div class="eachexp">
              <div class="moneye">
                <div class="amount">
                  <h1>-$<span class="amte">${amt}</span></h1>
                </div>
                <div class="descriptione">
                  <h1 class="expe">${desc}</h1>
                </div>
              </div>
              <div class="eddele">
                <div id="edite" data-id =${id}>
                  <svg
                    class="esv"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
                    ></path>
                  </svg>
                </div>
                <div id="dele" data-id =${id}>
                  <svg
                    class="esd"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"
                    ></path>
                    <path
                      d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                    <path
                      d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>`;
			expense.innerHTML += a;
		});
	}
});
