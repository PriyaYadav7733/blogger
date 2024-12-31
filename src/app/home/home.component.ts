import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true
})
export class HomeComponent {

}

