const mac_white = document.querySelector(".mac-white");
const mac_gray = document.querySelector(".mac-gray");
const whiteButton = document.querySelector(".white-button");
const grayButton = document.querySelector(".gray-button");
const gb512 = document.querySelector(".gb512");
const tb1 = document.querySelector(".tb1");
const tb2 = document.querySelector(".tb2");
const tb4 = document.querySelector(".tb4");
let price = document.querySelector(".cash");
let price_gray = document.querySelector(".cash_gray");

const handleChooseWhite = () => {
  mac_white.classList.remove("hidden");
  mac_gray.classList.add("hidden");
  whiteButton.classList.add("active");
  grayButton.classList.remove("active");
};

const handleChooseGray = () => {
  mac_white.classList.add("hidden");
  mac_gray.classList.remove("hidden");
  whiteButton.classList.remove("active");
  grayButton.classList.add("active");
};

const a = () => {
  gb512.classList.add("active");
  tb1.classList.remove("active");
  tb2.classList.remove("active");
  tb4.classList.remove("active");
  price.innerHTML = "$1,999"
  price_gray.innerHTML = "$2,599"
};

const b = () => {
  gb512.classList.remove("active");
  tb1.classList.add("active");
  tb2.classList.remove("active");
  tb4.classList.remove("active");
  price.innerHTML = "$2,199"
  price_gray.innerHTML = "$2,799";
};

const c = () => {
  gb512.classList.remove("active");
  tb1.classList.remove("active");
  tb2.classList.add("active");
  tb4.classList.remove("active");
  
  price.innerHTML = "$2,599"
  price_gray.innerHTML = "$3,199";
};

const d = () => {
  gb512.classList.remove("active");
  tb1.classList.remove("active");
  tb2.classList.remove("active");
  tb4.classList.add("active");
  
  price.innerHTML = "$3,199"
  price_gray.innerHTML = "$3,799";
};
