import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { IFood } from "../interface/food";

@Injectable({
    providedIn:'root'
})
export class FoodsService{

  private foodUrl = "/assets/api/food.json";
    

    constructor(private http:HttpClient){

    }

     getFoods(): Observable<IFood[]>{
      return this.http.get<IFood[]>(this.foodUrl)
      .pipe(
        // tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
     }

     private handleError(err: HttpErrorResponse): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    } 

       // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  getFood(id: number): Observable<IFood | undefined> {
    return this.getFoods()
      .pipe(
        map((foods: IFood[]) => foods.find(p => p.foodId === id))
      );
  }

}