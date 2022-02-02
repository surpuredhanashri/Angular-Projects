import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../CounterState/counter.state';
import { getCounter } from '../CounterState/custom.selector';
import { AppState } from '../../state/app.state';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
})
// , OnDestroy
export class CounterOutputComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  // counterSubscription: any = Subscription;
  counter$!: Observable<number>;
  // counter: number = 0;
  ngOnInit(): void {
    // this.counterSubscription = this.store
    //   .select('counter')
    //   .subscribe((data) => {
    //     this.counter = data.counter;
    //   });

    this.counter$ = this.store.select(getCounter);
  }

  // ngOnDestroy() {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
