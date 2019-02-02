import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import {CarsService} from '../cars.service';


@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName = '';
  carModel = '';

  constructor( private service: CarsService) { }

  ngOnInit() {
  }
  onAdd() {
    if (this.carModel === '' || this.carName === '') { return; }

    const date = moment().format('DD.MM.YY');

    const car = new Car(this.carName, date, this.carModel);

    this.service.addCar(car);

      this.carModel = '';
      this.carName = '';
  }

  onLoad() {
    this.service.loadCars();
  }
}
