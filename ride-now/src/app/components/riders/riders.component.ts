import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { Invoice } from '../../core/model/invioce.modal';

@Component({
  selector: 'app-riders',
  standalone: true,
  imports: [
     CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,],
  templateUrl: './riders.component.html',
  styleUrl: './riders.component.scss'
})
export class RidersComponent {
   date: Date | undefined;
   displayedColumns: string[] = ['id', 'riderName', 'driverName', 'rideDate', 'locations', 'amount', 'status', 'actions'];
   dataSource = new MatTableDataSource<Invoice>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.data = [
      {
        id: '#INV-00123',
        riderName: 'Ali Khan',
        driverName: 'Usman Raza',
        rideDate: new Date(),
        pickupLocation: 'Gulberg',
        dropoffLocation: 'Saddar',
        amount: 1200,
        status: 'Paid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
      {
        id: '#INV-00124',
        riderName: 'Sara Malik',
        driverName: 'Ahmed Ali',
        rideDate: new Date(),
        pickupLocation: 'Model Town',
        dropoffLocation: 'DHA',
        amount: 950,
        status: 'Unpaid',
      },
    ];
    this.dataSource.paginator = this.paginator;
  }

  markAsPaid(invoice: Invoice) {
    invoice.status = 'Paid';
    this.dataSource.data = [...this.dataSource.data];
  }

  downloadInvoice(invoice: Invoice) {
    alert(`Download PDF for ${invoice.id} (later integrate jsPDF)`);
  }

  viewInvoice(invoice: Invoice) {
    alert(`Navigate to detailed view for ${invoice.id}`);
  }
}

