import { Component } from '@angular/core';
import { sample } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = {
    email: "smachado@sample.com.br",
    job: 'Developer'
  }
  userName: string = 'Sam';
  title = 'memories';
}
