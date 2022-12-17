import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  @Input() name: string = '';
  @Input() userData!: {email: string, job: string};
}
