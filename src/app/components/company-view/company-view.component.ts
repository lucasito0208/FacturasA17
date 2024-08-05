import { Company } from './../../models/company';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html'
})
export class CompanyViewComponent {

  @Input() company!: Company;

}
