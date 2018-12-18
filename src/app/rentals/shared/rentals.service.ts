import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {
  private rentals: Rental[] = [
    {
      id: '1',
      title: 'Center Appartment',
      city: 'New Your',
      street: 'Times Sqaure',
      category: 'appartment',
      image: 'http://via.placeholder.com/350x200',
      bedrooms: 3,
      description: 'very nice appartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '2',
      title: 'Center Appartment',
      city: 'New Your',
      street: 'Times Sqaure',
      category: 'appartment',
      image: 'http://via.placeholder.com/350x200',
      bedrooms: 3,
      description: 'very nice appartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '3',
      title: 'Center Appartment',
      city: 'New Your',
      street: 'Times Sqaure',
      category: 'appartment',
      image: 'http://via.placeholder.com/350x200',
      bedrooms: 3,
      description: 'very nice appartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '4',
      title: 'Center Appartment',
      city: 'New Your',
      street: 'Times Sqaure',
      category: 'appartment',
      image: 'http://via.placeholder.com/350x200',
      bedrooms: 3,
      description: 'very nice appartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '5',
      title: 'Center Appartment',
      city: 'New Your',
      street: 'Times Sqaure',
      category: 'appartment',
      image: 'http://via.placeholder.com/350x200',
      bedrooms: 3,
      description: 'very nice appartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    }
  ];
  constructor() {}

  getRentalById(id: string): Observable<Rental> {
    return new Observable<Rental>(observer => {
      setTimeout(() => {
        const foundRental = this.rentals.find(rental => {
          return rental.id === id;
        });
        observer.next(foundRental);
      }, 500);
    });
  }

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 800);
    });
  }
}
