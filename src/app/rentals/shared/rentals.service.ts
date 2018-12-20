import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {
  constructor(private http: HttpClient) {}

  getRentalById(id: string): Observable<any> {
    return this.http.get(`/api/v1/rentals/${id}`);
  }

  getRentals(): Observable<any> {
    return this.http.get<any>('/api/v1/rentals');
  }
}
