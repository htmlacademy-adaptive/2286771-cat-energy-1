let header=document.querySelector(".header__wrapper"),headerToggle=document.querySelector(".header__toggle");header.classList.remove("header__wrapper--nojs"),headerToggle.addEventListener("click",(function(){header.classList.contains("header__wrapper--closed")?(header.classList.remove("header__wrapper--closed"),header.classList.add("header__wrapper--opened")):(header.classList.add("header__wrapper--closed"),header.classList.remove("header__wrapper--opened"))}));