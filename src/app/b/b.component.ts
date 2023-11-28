import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonBadge } from '../../ionic-test';

console.log(IonBadge)

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

}
