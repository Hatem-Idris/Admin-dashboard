let products = JSON.parse(localStorage.getItem("products")) || [
  { id: 1, name: "iPhone X", price: 400 },
  { id: 2, name: "iPhone 11", price: 450 },
  { id: 3, name: "iPhone 12", price: 500 },
  { id: 4, name: "iPhone 13", price: 550 },
  { id: 5, name: "iPhone 14", price: 600 },
];

let productsDiv = document.querySelector("#productsDiv");
let modal = document.querySelector(".mymodal");
let phonename = document.querySelector("#phonename");
let phoneprice = document.querySelector("#phoneprice");

let cashierpage = document.querySelector("#cashierpage")

let saveToStorage = () => {
  localStorage.setItem("products", JSON.stringify(products));
};

let showProducts = () => {
  productsDiv.innerHTML = "";
  products.forEach((el, index) => {
    productsDiv.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <div class="d-flex justify-content-between">
            <h5>${el.name}</h5>
            <button class="btn btn-sm btn-danger" onclick="deletePhone(${index})">X</button>
          </div>
          <p class="mb-1">Price: ${el.price} $</p>
        </div>
      </div>
    `;
  });
};

let togglemodal = () => {
  modal.classList.toggle("d-none");
  modal.classList.toggle("d-flex");
};

let closemodal = () => {
  modal.classList.add("d-none");
  modal.classList.remove("d-flex");
};

let add = () => {
  if (phonename.value === "" || phoneprice.value === "") {
    alert("You can't leave empty values");
  } else {
    let newPhone = {
      id: Date.now(),
      name: phonename.value,
      price: +phoneprice.value,
    };
    products.push(newPhone);
    saveToStorage();
    phonename.value = "";
    phoneprice.value = "";
    closemodal();
    showProducts();
  }
};

let deletePhone = (index) => {
  products.splice(index, 1);
  saveToStorage();
  showProducts();
};

showProducts();

let goback = ()=>{
  window.location.href = 'index.html'
}
