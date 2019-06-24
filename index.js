var cardContainer = $('.card-container');
var submit = $('.submit-btn')

submit.on("click", appendList);

function appendList() {
  var name = $('.name').val();

  cardContainer.append(`<div class="name-card"> <input type="checkbox" class="checkbox"> ${name} </div>`);

  var checkbox = $('.checkbox');
  checkbox.on("click", remove);

  $('.name').val("");
}

  function remove(){
  event.target.parentNode.remove();
 }
