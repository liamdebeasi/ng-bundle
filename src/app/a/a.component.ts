import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonChip } from '@ionic/angular/standalone';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule, IonChip],
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {

}
