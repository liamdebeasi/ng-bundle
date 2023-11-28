import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonChip } from '../../ionic-test';

console.log(IonChip);

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {

}
