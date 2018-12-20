import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material/material.module';
import { RentalComponent } from './rental/rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { SearchComponent } from '../common/search/search.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalsRoutingModule } from './rentals-routing.module';

@NgModule({
  declarations: [RentalComponent, RentalListComponent, RentalListItemComponent, SearchComponent, RentalDetailComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, RentalsRoutingModule, HttpClientModule]
})
export class RentalsModule {}
