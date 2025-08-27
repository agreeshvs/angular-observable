import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable';
  data: any[] = [];

  // 1. Create an Observable
  // Observable
  myObservable = new Observable( (observer) => {
    // observer.next([1,2,4,5,67,7]); //Observable Emit a value
    /* observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5); */

    // Observable
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.error(new Error('Something went wrong please try later.'));
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
  });
  

  getAsyncData(){
    // 2. Subscribe to the Observable
    // Observer
    // next, error, complete are callback functions
    this.myObservable.subscribe( (val:any) => {
      // Handler for each emitted value
      this.data.push(val);
    }, error => {
      console.error('Error occurred: ', error);
    });
  }
}
