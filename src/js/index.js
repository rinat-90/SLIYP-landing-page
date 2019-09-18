import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import { slick } from 'slick-carousel';


$(document).ready(function () {

  $('.carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<i class="prev"></i>',
    nextArrow: '<i class="next"></i>',
  });



})