import Component from '@ember/component';
import { set } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  hasExpanded: false,

  didInsertElement() {
    this._super();
    // $('#menu-options').hide();

    // const mediaMob = document.getElementById('hamburger');
    // if (mediaMob != null) {
    //   mediaMob.addEventListener('click', () => {
    //     const burgerTop = document.getElementById('burger-top');
    //     const burgerMid = document.getElementById('burger-mid');
    //     const burgerDown = document.getElementById('burger-down');
    //     const menu = document.getElementById('menu');
    //     const dropdowns = document.getElementsByClassName('dropdown');
    //     // const header = document.getElementById('site-header');
      
    //     burgerTop.classList.toggle('burger-top-rotate');
    //     burgerDown.classList.toggle('burger-down-rotate');
    //     burgerMid.classList.toggle('hide');
    //     menu.classList.remove('menu-toggle');
      
    //     if (!burgerTop.classList.contains('burger-top-rotate')) {
    //       // hide the menu
    //       menu.classList.add('hide')
    //       burgerDown.style.backgroundColor = '#fff';
    //       burgerTop.style.backgroundColor = '#fff';
    //       // menu.classList.add('thirteen');
    //       // header.style.setProperty('position', 'fixed');
    //     } else {
    //       // show the menu
    //       menu.classList.remove('hide');
    //       document.getElementById('grid-collapse').classList.add('equal-columns_2');
    //       // for (let dropdown of dropdowns) {
    //       //   dropdown.style.display = "block";
    //       // }
          
    //       if (menu.classList.contains('thirteen')) {
    //         menu.classList.remove('thirteen');
    //       }
    //     }
    //   });
    // }
  },

  actions: {
    expandBurger() {
      if (!this.hasExpanded) { // expand the menu
        $('#menu-options').show();
        $('#burger-top').addClass('burger-top-rotate');
        $('#burger-down').addClass('burger-down-rotate');
        $('#burger-mid').hide();
        set(this, 'hasExpanded', true);
      } else { // collapse the menu
        $('#menu-options').hide();
        $('#burger-mid').show();
        $('#burger-top').removeClass('burger-top-rotate');
        $('#burger-down').removeClass('burger-down-rotate');
        set(this, 'hasExpanded', false);
      }
    }
  }
});
