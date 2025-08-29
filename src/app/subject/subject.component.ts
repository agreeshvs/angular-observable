import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /* let obs = new Observable( (observer) => {
      observer.next(Math.random());
    });

    

    // Subscriber 1

    // Observable
    obs.subscribe( (val) => {
      console.log(val)
    })

    

    // Subscriber 2

    // Observable
    obs.subscribe( (val) => {
      console.log(val)
    })

    


    */


    // let sub = new Subject();

    // let behavSub = new BehaviorSubject<number>(100);

    /* let sub = new ReplaySubject(2); // All the subscribers get old emitted values.

    sub.next(100);
    sub.next(200);
    sub.next(300);

    console.log(sub)
    // Subject
    sub.subscribe( (data) => {
      console.log('sub1 :: ',data)
    })

    // Subject
    sub.subscribe( (data) => {
      console.log('sub2 :: ',data)
    }) 
    sub.next(2020);
    sub.subscribe( (data) => {
      console.log('sub3 :: ',data)
    })

    sub.next(2023) */

    // behavSub.subscribe( (data) => {
    //   console.log('behavSub 1 :: ',data)
    // })

    // behavSub.next(2020);

    // // Initial value will be last emitted value.
    // behavSub.subscribe( (data) => {
    //   console.log('behavSub 2 :: ',data)
    // })

    // behavSub.next(2023);

    // sub.next(Math.random());

    // AJAX CALL

    /* const subject = new Subject();
    const data = ajax('https://randomuser.me/api/'); */

    /* data.subscribe( (res) => {
      console.log(res);
    })

    data.subscribe( (res) => {
      console.log(res);
    })

    data.subscribe( (res) => {
      console.log(res);
    }) */

    /* subject.subscribe( (res) => {
      console.log(res);
    })

    subject.subscribe( (res) => {
      console.log(res);
    })

    subject.subscribe( (res) => {
      console.log(res);
    })

    // Subject is a consumer of a value.
    data.subscribe(subject); */


    // Async Subject
    const asyncSubject = new AsyncSubject();
    // Return the last emmitted value before the complete method.
    // First complete function will be call, all other are ignored.

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300); // Only this value is emitted.
    
    asyncSubject.subscribe( data => {
      console.log(`Sub 1 :: ${data}`);
    })
    asyncSubject.complete(); // AsyncSubject only emit the last value after observable completion.
    asyncSubject.next(400); // This value not emitted

    asyncSubject.subscribe( data => {
      console.log(`Sub 2 :: ${data}`);
    })
    
  }
}
