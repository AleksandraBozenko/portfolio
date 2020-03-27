"use strict";

//To jest do pwa nie edytuj tutaj nic ...

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const project = document.querySelector('.projects__example');
const choose = document.querySelector('.projects__choose');
// const options = document.querySelector('.projects__example--button');


project.addEventListener('click', (e) =>{
  choose.classList.toggle('projects__choose--js');
})
