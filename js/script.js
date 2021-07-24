let burger = document.querySelector(".burger");
let dir = document.querySelector(".dir");
let menu = document.querySelector(".nav-menu");
burger.addEventListener("click", () => {
  dir.classList.toggle("toggle-menu");
  menu.classList.toggle("show-menu");
});

let swiperOne = new Swiper(".swiper-container.slider-one", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
  },
  mousewheel: true,
  keyboard: true,
});

let swiperTwo = new Swiper(".swiper-container.slider-two", {
  slidesPerView: 7,
  spaceBetween: 5,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 1500,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is <= 499px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    600: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    999: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
    1300: {
      slidesPerView: 7,
      spaceBetweenSlides: 50,
    },
  },
});
let swiperThree = new Swiper(".swiper-container.slider-three", {
  slidesPerView: 4,
  spaceBetween: 1,
  loop: true,
  speed: 1500,

  autoplay: {
    delay: 1500,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is <= 499px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    600: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    999: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    1300: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
  },
});
let swiperFor = new Swiper(".swiper-container.slider-for", {
  slidesPerView: 4,
  spaceBetween: 5,
  loop: true,
  speed: 1500,

  autoplay: {
    delay: 1500,
  },

  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is <= 499px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    600: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    999: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    1300: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
  },
});
let swiperFive = new Swiper(".swiper-container.slider-five", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  speed: 1500,

  autoplay: {
    delay: 1500,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is <= 499px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    600: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },

    1300: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
  },
});
const blockDesert = () => {
  let objDesertBlock = {
    img: "../images/desert.jpg",
    desert: `Safari ride with the camel andlorem ipsum dolor`,
    category: "CATEGORY NAME",
    price: "24$",
    description:
      "Activity short description Though I’ll stop short of calling it a rule. Compaign short description Though I’ll stop short of calling it a rule.",
    imgPerson: "../images/girl.webp",
    name: "Jhina Morris Agent",
  };

  let arrBlock = [];

  for (let i = 0; i < 10; i++) {
    arrBlock.push(objDesertBlock);
  }

  let tendBlock = document.querySelector(".t_blocks");
  let tendBlockNew = document.querySelector(".t_blocks-new");

  console.log(tendBlock);
  arrBlock.map((item) => {
    let slideElem = document.createElement("div");
    slideElem.classList.add("swiper-slide");

    slideElem.innerHTML = `<img src=${item.img} /><div class="text-card"> <strong claass="block-title">${item.desert}</strong> 
<div class="category-item"> <span>${item.category}</span> <span>${item.price}</span> </div>
<p>${item.description}</p> 
<div class="person-col"> <img class="block-img" src="../images/girl.webp" />
 <h3>Jhina Morris Agent</h3> </div> </div>`;
    tendBlock.append(slideElem);
  });

  arrBlock.map((item) => {
    let slideElem = document.createElement("div");
    slideElem.classList.add("swiper-slide");
    slideElem.innerHTML = `<img src=${item.img} /><div class="text-card"> <strong claass="block-title">${item.desert}</strong> 
    <div class="category-item"> <span>${item.category}</span> <span>${item.price}</span> </div>
    <p>${item.description}</p> 
    <div class="person-col"> <img class="block-img" src="../images/girl.webp" />
     <h3>Jhina Morris Agent</h3> </div> </div>`;
    tendBlockNew.append(slideElem);
  });
};

blockDesert();
let link = document.getElementsByTagName("a");
let swipeBlock = document.querySelector(".n_blocks");
for (let i = 0; i < link.length; i++) {
  link[i].style.color = "black";
  link[i].style.fontSize = "14PX";
  link[i].addEventListener("click", (event) => {
    event.preventDefault();
  });
}

const xhrUrl = "https://fakestoreapi.com/products";

function requestUrl() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", xhrUrl);

    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const product = JSON.parse(xhr.response);
        resolve(product);
        product.map((item) => {
          console.log(item);
          let slideElem = document.createElement("div");
          slideElem.classList.add("swiper-slide");
          slideElem.innerHTML = `<img src=${
            item.image
          } /><div class="text-card"> <strong claass="block-title">${
            item.title
          }</strong> 
    <div  class="category-item">    <span>${item.category}</span> <span>${
            item.price
          }</span></div> <p>${item.description.slice(
            0,
            100
          )}</p> <div class="person-col"> <img class="block-img" src="../images/girl.webp" /> <h3>Jhina Morris Agent</h3> </div> </div>`;
          swipeBlock.prepend(slideElem);
        });
      } else {
        reject(xhr.response);
      }
    };
    xhr.send();
  });
}
requestUrl();
