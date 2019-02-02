import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AddCar, CAR_ACTION} from './cars.action';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';
import 'rxjs/add/operator/switchMap';
import {mergeMap} from 'rxjs/operators';


@Injectable()
export class CarsEffect {

  constructor(private  action$: Actions, private service: CarsService) {
  }

  @Effect() loadCars = this.action$.ofType(CAR_ACTION.ADD_CAR)
    .switchMap((action: AddCar) => {
      return this.service.preloadCars();
    }).pipe(
    mergeMap((cars: Car[]) => {
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ] ;
    }) );


}
