import { Component, OnInit } from '@angular/core';
import { RentalsService } from '../shared/rentals.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];

  constructor(private rentalService: RentalsService) {}

  ngOnInit() {
    this.rentalService.getRentals().subscribe(data => {
      this.rentals = data.rentals;
      console.log(this.rentals);
    });
  }
}
