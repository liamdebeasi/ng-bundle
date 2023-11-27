import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CommonModule, IonBadge],
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

}
