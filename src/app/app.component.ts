import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Car, Cars} from './car.model';
import {AppState} from './redux/app.state';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [];

  public carState: Observable<Cars>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carState = this.store.select('carPage');
  }

  onAdd(car: Car) {
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id);
  }
}
