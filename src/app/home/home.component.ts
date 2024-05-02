import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatDividerModule,MatListModule,MatIconModule,ScrollingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
