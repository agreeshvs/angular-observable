import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

    let sub = new Subject();

    // Subscriber 1

    // Observable
    obs.subscribe( (val) => {
      console.log(val)
    })

    // Subject
    sub.subscribe( (data) => {
      console.log('sub1 :: ',data)
    })

    // Subscriber 2

    // Observable
    obs.subscribe( (val) => {
      console.log(val)
    })

    // Subject
    sub.subscribe( (data) => {
      console.log('sub2 :: ',data)
    }) 


    sub.next(Math.random());*/


    // AJAX CALL

    const subject = new Subject();
    const data = ajax('https://randomuser.me/api/');

    /* data.subscribe( (res) => {
      console.log(res);
    })

    data.subscribe( (res) => {
      console.log(res);
    })

    data.subscribe( (res) => {
      console.log(res);
    }) */

    subject.subscribe( (res) => {
      console.log(res);
    })

    subject.subscribe( (res) => {
      console.log(res);
    })

    subject.subscribe( (res) => {
      console.log(res);
    })

    // Subject is a consumer of a value.
    data.subscribe(subject);
    
  }
}
