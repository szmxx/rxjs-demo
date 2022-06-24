import './style.css';

import { of, map, Observable, fromEvent, filter, scan } from 'rxjs';

// Open the console in the bottom right to see results.
const input = fromEvent(document.querySelector('input'), 'input');

// 过滤掉小于3个字符长度的目标值
input
  .pipe(
    filter((event) => event.target.value.length <= 2),
    map((event) => event.target.value),
    scan((acc, cur) => +acc + +cur, 0)
  )
  .subscribe((value) => console.log(value));

const sub = new Observable((subcription) => {
  setTimeout(() => {
    console.log('1000');
    // subcription.complete();
  }, 1000);
  setTimeout(() => {
    console.log('3000');
    subcription.next(1);
  }, 3000);
  setTimeout(() => {
    console.log('500');
  }, 500);
});

sub.subscribe({
  next(arg) {
    console.log('next', arg);
  },
});
