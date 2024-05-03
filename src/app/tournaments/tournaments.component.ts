import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatLine } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatLine,MatAccordion,MatExpansionModule],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {

}
