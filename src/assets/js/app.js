import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax} from 'gsap';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


//temp arrow animation
let exploreLink = document.querySelector('.explore-link');
let exploreArrow = document.querySelector('#explore-arrow');

exploreLink.addEventListener('mouseover', () => {
  TweenMax.to(exploreArrow, 0.5, {
    x: '0%',
    ease: Power4.easeOut,
  });
});

exploreLink.addEventListener('mouseout', () => {
  TweenMax.to(exploreArrow, 0.5, {
    x: '60%',
    ease: Power4.easeOut,
  });
});

$(document).foundation();

//
// const menuBtnAnimation = () => {
//   let portfolioBtn = document.querySelector('.portfolio-btn');
//   let portfolioBtnUnderline = document.querySelector('.portfolio-btn-underline');
//
//   portfolioBtn.addEventListener('mouseover', () => {
//     TweenMax.to(portfolioBtnUnderline, 0.5, {
//         scaleX:1,
//         ease: Power4.easeInOut,
//       })
//   })
//
//   portfolioBtn.addEventListener('mouseout', () => {
//     TweenMax.to(portfolioBtnUnderline, 0.5, {
//         scaleX:0,
//         ease: Power4.easeInOut,
//       })
//   })
// }
//
// export default menuBtnAnimation;
