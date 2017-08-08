/**
 * Created by sumragen on 04.07.17.
 */
import {Component} from '@angular/core';

import { fadeInAnimation } from '../../shared/animations/fade-in.animation'

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  animations: [fadeInAnimation]
})
export class HomeComponent {

}
