import $ from 'jquery'
import SmoothScroll from 'smooth-scroll'

export function insertStrings(template, list) {
  for(let item of list){
    template.replace(`#${ item.key }#`, item.value);
  }
  return template;
}

export function activeLi(){
  'use strict';
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    easing: 'easeInOutCubic'
  });

  let links = document.querySelectorAll('.nav-link');
  links.forEach(li => {
    li.onclick = () => {
      links.forEach(li => li.classList.remove("active"));
      li.classList.toggle('active');
    }
  });

  let sections = document.querySelectorAll('.resume-section');
  let lis = document.querySelectorAll('.navbar-nav');
  
  $(window).scroll(function() {
    lis.forEach(li => {
      $(li).find('a').removeClass('active');
    });
    sections.forEach(section => {
      var hT = $(`#${section.id}`).offset().top,
          hH = $(`#${section.id}`).outerHeight(),
          wS = $(this).scrollTop();
      if (wS+1 > hT && wS < (hT + hH)){
        let a = $(lis).find(`a[href*='#${section.id}']`);
        $(a).addClass('active');
      }
    });
    
  })
}