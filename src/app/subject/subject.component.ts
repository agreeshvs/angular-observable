import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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


    let sub = new Subject();

    let behavSub = new BehaviorSubject<number>(100);
    // Subject
    sub.subscribe( (data) => {
      console.log('sub1 :: ',data)
    })

    // Subject
    sub.subscribe( (data) => {
      console.log('sub2 :: ',data)
    }) 

    behavSub.subscribe( (data) => {
      console.log('behavSub 1 :: ',data)
    })

    behavSub.next(2020);

    // Initial value will be last emitted value.
    behavSub.subscribe( (data) => {
      console.log('behavSub 2 :: ',data)
    })

    behavSub.next(2023);

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
    
  }
}
