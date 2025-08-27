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
   /*  setTimeout(() => {
      observer.error(new Error('Something went wrong please try later.'));
    }, 3000); */
    // After error, other subscribe functions will not work.
    // Once error is emitted, no data or complete signal will not emitted.

    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    

    // Complete method - signals completion of data stream

    setTimeout(() => {
      observer.complete();
    }, 6000);

    // data stream will complete after 3 seconds.
    // Other data streams will not work
  });
  

  getAsyncData(){
    // 2. Subscribe to the Observable
    // Observer
    // next, error, complete are callback functions
    /* this.myObservable.subscribe( (val:any) => {
      // Handler for each emitted value
      this.data.push(val);
    }, (err) => {
      // Call back function to handle error events
      alert(err.message);
    }, () =>{
      // callback function for complete event.
      alert('Data stream ended.');
    }); */



    this.myObservable.subscribe({
      next:( val: any) =>{
        this.data.push(val)
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('Complete message');
      }
    })

  }
}
