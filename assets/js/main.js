// send email

$(document).ready(function(){


   $('#email_id').on('focusout', function(){

       if($('#email_id').val() != ""){

          if(validateEmail($('#email_id').val())){

           $('.error').fadeOut('slow');

          }else{
             $('.error').text('Invalid Email...!');
             $('.error').fadeIn('slow');
          }

       }else{
           $('.error').fadeOut(0);
       }



   });

});


function validateEmail(eVal){
   var val = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
   
   if( val.test(eVal)){
       return true;
   }else{
       return false;
   }
}


function SendMail(){
   var params = {
      from_name : document.getElementById("fullname").value,
      email_id : document.getElementById("email_id").value,
      message : document.getElementById("message").value,
   }
   emailjs.send("service_hbfb7mg","template_r3r3cci",params);
   }
   

/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
   navToggle.addEventListener("click",() => {
      navMenu.classList.add('show-sidebar');
   })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
   navClose.addEventListener("click",() => {
      navMenu.classList.remove('show-sidebar');
   })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
         tab.addEventListener("click" , () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents =>{
               tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')


            tabs.forEach(tab => {
               tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active') 
         })
      })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*===== Link Active Work =====*/


/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
   let parent = this.parentNode;
   parent.classList.add("focus");
}

function blurFunc() {
   let parent = this.parentNode;
   if(this.value == "") {
      parent.classList.remove("focus");
   }
}

inputs.forEach((input) => {
   input.addEventListener("focus",focusFunc);
   input.addEventListener("blur",blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHightlighter)

function navHightlighter()
{
   let scrollY = window.pageYOffset;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
      }
      else{
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
      }
   })
}

/*=============== SHOW SCROLL UP ===============*/
