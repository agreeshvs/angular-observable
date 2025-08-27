import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-observable';
  data: any[] = [];
  array1 = [1,3,5,7,9];
  array2 = ['a','b','c','f'];

  @ViewChild('createButton') createButton: ElementRef;

  createButtonObservable
  count: number = 0;


  

  // 1. Create an Observable
  // Observable
  // myObservable = new Observable( (observer) => {
  //   // observer.next([1,2,4,5,67,7]); //Observable Emit a value
  //   /* observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.next(4);
  //   observer.next(5); */

  //   // Observable
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //  /*  setTimeout(() => {
  //     observer.error(new Error('Something went wrong please try later.'));
  //   }, 3000); */
  //   // After error, other subscribe functions will not work.
  //   // Once error is emitted, no data or complete signal will not emitted.

  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
    

  //   // Complete method - signals completion of data stream

  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);

  //   // data stream will complete after 3 seconds.
  //   // Other data streams will not work
  // });
  

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



    /* this.myObservable.subscribe({
      next:( val: any) =>{
        this.data.push(val);
        console.log(val)
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data is streamed : Complete message');
      }
    }) */

    // map function
    /* this.transformObs.subscribe({
      next:(val: any) => {
        this.data.push(val)
      },
      error (err){
        alert('Error in observable');
      },
      complete() {
        // alert('All the data is streamed.')
      }
    }) */

    // filter function

    /* this.filteredObs.subscribe({
      next:(val: any) => {
        this.data.push(val)
      },
      error (err){
        alert('Error in observable');
      },
      complete() {
        // alert('All the data is streamed.')
      }
    }) */

    // Chaning observables

    this.myObservable.subscribe( {
      next: (val: any)=>{
        this.data.push(val);
      },
      error(err){
        alert("Error");
      },
      complete(){
        console.log('Completed');
      }
    })

  }

  promise = new Promise( (resolve,reject)=>{
    resolve([10,202,30,40,50]);
  })
  // myObservable = of(this.array1, this.array2, true, 'Hello',22);

  // of() accept multiple parameters, and emit every params.
  // from() emit by iterating the parameter.
  // myObservable = from(this.promise); // Only one parameter. This prameter should be iterable.


  myObservable = from([2,4,6,8,10,12]).pipe( map( (item) => {
    return item * 5
  }),filter( (val)=> {
    return val % 4 === 0;
  })); 

  // Observable - 2,4,6,8,10,12
  // Result - 10,20,30,40,50,60
  
  // transformObs - 10,20,30,40,50,60
  /* transformObs = this.myObservable.pipe( map( (val) =>{
    return val * 5
  } ))

  filteredObs = this.transformObs.pipe( filter( (val) => {
    return val % 4 === 0;
    // will emit the filterd data
  }))

  chainingObs = this.myObservable.pipe( map( (item) => {
    return item * 5
  }),filter( (val)=> {
    return val % 4 === 0;
  }))
 */



  /* buttonCllicked(){
    this.createButtonObservable = fromEvent(this.createButton.nativeElement,'click').subscribe(
      (data) => {
        console.log(data);
        this.showItem(++this.count);
      }
    );
  } */

  ngAfterViewInit(){
    // this.buttonCllicked();
  }

  /* showItem(count){
    let divElemnt = document.createElement('div');
    divElemnt.innerText = 'Item '+count;
    divElemnt.className = 'data-list';
    document.getElementById('container').appendChild(divElemnt);
  } */
  
}
