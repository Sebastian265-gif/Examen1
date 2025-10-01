import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'input-text-template',
    templateUrl: './input-text.component.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, FloatLabel]
})
export class InputTextFloatlabelDemo {
    
}