let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = [];

let totalSpan = document.querySelector("#totalSpan");
let table = document.querySelector("table tbody");
let productsDiv = document.querySelector("#productsDiv");



let getTotal = () => {
  let final = 0;
  cart.forEach((el) => {
    final += el.price * el.qty;
  });
  totalSpan.innerText = final;
};

let showProducts = () => {
  productsDiv.innerHTML = "";
  products.forEach((el) => {
    productsDiv.innerHTML += `
      <div class="col-12 p-3 bg-white rounded border">
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="mb-0">${el.name}</h5>
          <button class="btn btn-success btn-sm" onclick="addToCart(${el.id})">Add</button>
        </div>
        <p class="mb-0">Price : ${el.price} $</p>
      </div>
    `;
  });
};

let showCart = () => {
  table.innerHTML = "";
  cart.forEach((el, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${el.name}</td>
        <td>${el.price} $</td>
        <td>
          <div class="d-flex align-items-center justify-content-center gap-2">
            <button class="btn btn-danger btn-sm" onclick="decrease(${index})">-</button>
            <p class="mb-0">${el.qty}</p>
            <button class="btn btn-success btn-sm" onclick="increase(${index})">+</button>
          </div>
        </td>
        <td>${el.qty * el.price} $</td>
        <td><button onclick="deleteItem(${index})" class="btn btn-danger btn-sm">Del</button></td>
      </tr>
    `;
  });
  getTotal();
};

let addToCart = (id) => {
  let product = products.find((p) => p.id === id);
  let productInCart = cart.find((c) => c.id === id);

  if (!productInCart) {
    cart.push({ ...product, qty: 1 });
  } else {
    productInCart.qty++;
  }
  showCart();
};

let increase = (index) => {
  cart[index].qty++;
  showCart();
};

let decrease = (index) => {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  }
  showCart();
};

let deleteItem = (index) => {
  cart.splice(index, 1);
  showCart();
};

let resetBill = () => {
  cart = [];
  showCart();
};

showProducts();
showCart();


let modal = document.querySelector(".mymodal");

let username = document.querySelector('#username')
let userpassword = document.querySelector('#userpassword')
let user = 'eerasoft'
let password = 1234

let togglemodal = () => {
  modal.classList.toggle("d-none");
  modal.classList.toggle("d-flex");
};

let closemodal = () => {
  modal.classList.add("d-none");
  modal.classList.remove("d-flex");
};

let signin = () => {
  if (username.value === "" || userpassword.value === "") {
    alert("You can't leave empty values");
  } else if (username.value == user && userpassword.value == password) {
    window.location.href = 'adminboard.html'
    username.value=""
    userpassword.value = ""
  } else {
    alert("username or password is invalid")
  }
};