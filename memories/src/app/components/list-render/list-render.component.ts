import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    { name: 'pet', type: 'Dog' },
    { name: 'pet1', type: 'Cat' },
    { name: 'pet2', type: 'Fish' },
    { name: 'pet3', type: 'Dog' },
    { name: 'pet4', type: 'Cat' },
  ];

}
