'use strict';

function Animal(animal) {
  this.image_url = animal.image_url;
  this.title = animal.title;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
}

Animal.allAnimals = [];

Animal.prototype.render = function () {
  $('main').append('<div class="dupe"></div>');
  let animalDupe = $('div[class="dupe"]');

  let animalHtml = $('#photo-template').html();

  animalDupe.html(animalHtml);

  animalDupe.find('h2').text(this.title);
  animalDupe.find('img').attr('src', this.image_url);
  animalDupe.find('#description').text(this.description);
  animalDupe.find('#keyword').text(this.keyword);
  animalDupe.find('#horns').text(this.horns);
  animalDupe.removeClass('dupe');
  animalDupe.attr('class', this.title);
};

Animal.readJson = () => {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Animal.allAnimals.push(new Animal(item));
      });
    })
    .then(Animal.loadAnimals)
    .then(Animal.loadKeyword);
};

Animal.loadAnimals = () => {
  console.log('load animals');
  Animal.allAnimals.forEach(animal => animal.render());
};

$(() => Animal.readJson());

Animal.loadKeyword = () => {
  Animal.allAnimals.forEach(animal => {
    console.log(animal);
    $('select').append(`<option value="${animal.keyword}">${animal.keyword}</option>`);
  });
};

// line 51 will be changed, we will make an array with the keywords and then iterate over them..
