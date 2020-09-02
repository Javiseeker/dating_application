import { Component } from '@angular/core';
import { ValueService } from './value/value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private valueService: ValueService
  ){}
  title = 'DatingApp-SPA';
}
