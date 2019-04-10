'use strict';

function Animal(animal) {
  this.image_url = animal.image_url;
  this.title = animal.title;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
}

Animal.allAnimals = [];

Animal.prototype.render = function() {
  $('main').append('<div class="dupe"></div>');
  let animalDupe = $('div[class="dupe"]');

  let animalHtml = $('#photo-template').html();

  animalDupe.html(animalHtml);

  animalDupe.find('h2').text(this.title);
  animalDupe.find('img').attr('src', this.image_url);
  animalDupe.find('#description').text(this.description);
  animalDupe.find('#keyword').text(this.keyword);
  animalDupe.find('#horns').value(this.horns);
};
