import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemsComponent } from '../row-items/row-items.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { TotalComponent } from '../total/total.component';
import { FormItemsComponent } from '../form-items/form-items.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    ClientViewComponent, 
    CompanyViewComponent, 
    InvoiceViewComponent, 
    ListItemsComponent, 
    RowItemsComponent,
    TotalComponent,
    FormItemsComponent
  ],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  constructor(private service: InvoiceService) { }


  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: any) {
    this.invoice = this.service.remove(id);
  } 

  addItem(item: Item) {
    this.invoice = this.service.save(item);
  }

}
