// Lightbox modal
const body = document.body;
const items = document.querySelectorAll(".gallery__item");
const modal = document.createElement("section");
const modalImg = document.createElement("img");
const modalPrev = createButton(prevItem);
const modalNext = createButton(nextItem);
const modalClose = createButton(closeModal);
let currentItem = 0;

modal.classList.add("gallery__modal");
modalPrev.classList.add("gallery__navigation--prev");
modalNext.classList.add("gallery__navigation--next");
modalClose.classList.add("gallery__navigation--close");

function createButton(action) {
    const button = document.createElement("button");
    button.addEventListener("click", action);
    return button;
}

function prevItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    showModal();
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    showModal();
}

function closeModal() {
    modal.remove();
    body.classList.remove('noscroll'); // Ensure scrolling is enabled
}

function showModal() {
    const clickedImage = items[currentItem].querySelector("img");
    modalImg.src = clickedImage.src;
    modalImg.alt = clickedImage.alt;
    modal.innerHTML = ''; // Clear the modal content
    modal.append(modalImg, modalPrev, modalNext, modalClose);
    body.appendChild(modal);
}

// Attach click event to each gallery item
items.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentItem = index; // Set the clicked image index
        showModal();
        body.classList.add('noscroll'); // Disable scrolling when modal is open
    });
});

// Close modal with Escape key
document.body.addEventListener('keyup', (ev) => {
    if (ev.key === "Escape" && body.contains(modal)) {
        closeModal();
    }
});

// Hover functionality for image captions
items.forEach((item) => {
    const img = item.querySelector("img");
    const caption = item.querySelector(".gallery__image__caption");

    item.addEventListener("mouseenter", () => {
        caption.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
        caption.style.opacity = "0";
    });
});


// sticky header

$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() > $("#sticky-wrapper").position().top) {
    $('.sticky-area').css('width', '100%');
    $('.sticky-area').css('max-width', '1600px');
    $('.sticky-area').css('margin', '0 auto');
    $('.sticky-area').css('position', 'fixed');
    $('.sticky-area').css('top', '0px');
    $('.sticky-area').css('background', '#e9f2ff');
    $('.sticky-area ul.nav .nav-li > a').css('color', '#085291');
    $('.school-name').css('color', '#085291');
    $('.sticky-area ul li a').css('font-weight', '500');
    $('.sticky-area').css('z-index', '1');
    $('.sticky-area').css('box-shadow', '0 3px 5px -2px #ebe8e8');
    $('#sticky-wrapper').addClass('is-sticky');

  }
  else{
  $('.sticky-area').removeAttr('style');
  $('.sticky-area ul.nav .nav-li > a').removeAttr('style');
  $('.school-name').removeAttr('style');

  }
  
});


// mobile menu

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".canva_expander" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".canva_expander" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".canva_expander" ).show();
  });
  });
  
  });

 // Close out sub menu
 $('.sub__close').click(function(e) {
  e.preventDefault();
  
  $(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.menu ul .nav__submenu').click(function(e) {
  e.preventDefault();
  
  $(this).siblings().addClass('is-active');
});



$(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });
});