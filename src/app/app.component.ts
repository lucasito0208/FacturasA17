import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, InvoiceComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = '2-invoice-app';
}
