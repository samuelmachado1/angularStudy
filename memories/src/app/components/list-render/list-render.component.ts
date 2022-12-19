import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'pet', type: 'Dog', age: 2 },
    { name: 'pet1', type: 'Cat', age: 10 },
    { name: 'pet2', type: 'Fish', age: 4 },
    { name: 'pet3', type: 'Dog', age: 3 },
    { name: 'pet4', type: 'Cat', age: 6 },
  ];

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

}
