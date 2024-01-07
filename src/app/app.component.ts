import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnskaObjekt } from '../shared/models/onskaobjekt'; 

// TypeScript file
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    new OnskaObjekt('Niggerhot ska lösas'),
    new OnskaObjekt('Lär dig plocka gitarr som Malmsteen', true),
    new OnskaObjekt('Förstör judisk makt')
  ];
  title = 'onskelista';
}
