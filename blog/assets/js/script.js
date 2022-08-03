'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
function myFunction() {
  var x = document.getElementById("nav-menu-btn");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// load more button
const loadmore = document.querySelector('#loadmore');
    let currentItems = 2;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.blog-card-group .blog-card')];
        for (let i = currentItems; i < currentItems + 2; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 2;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })
