const burger = document.getElementById('burger');
const burgerList = document.querySelector('.burgerList');
const navburgerItem = document.querySelectorAll('navburger-item')
const listItems = burgerList.querySelectorAll('a');
console.log('Hey!');


burger.addEventListener('click', function() {
    burgerList.classList.toggle('hidden')
    console.log('Click!');
})


listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      burgerList.classList.add('hidden');
    });
  });


