import { Component } from '@angular/core';
import { ImageTemplateDemo } from '../image/image.component';
import { InputTextFloatlabelDemo } from '../input-text/input-text.component';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-home',
  standalone:true,
  imports: [ImageTemplateDemo,InputTextFloatlabelDemo,ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}



