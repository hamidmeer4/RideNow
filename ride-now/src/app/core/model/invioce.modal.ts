export interface Invoice {
  id: string;
  riderName: string;
  driverName: string;
  rideDate: Date;
  pickupLocation: string;
  dropoffLocation: string;
  amount: number;
  status: 'Paid' | 'Unpaid';
}