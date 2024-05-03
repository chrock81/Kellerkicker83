import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,MatToolbarModule,MatIconModule,MatButtonModule,MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
