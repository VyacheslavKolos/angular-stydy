import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {InnerComponent} from "./components/inner/inner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy, AfterViewInit, AfterViewChecked{

  title = 'hooks';

  //access to child component
  @ViewChild(InnerComponent)
  inner: InnerComponent;

  constructor() {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges',changes)
  // }


  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }


  ngAfterViewInit(): void {
    console.log(this.inner.asd);
  }
  ngAfterViewChecked(): void {
  }



  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  changeTitle() {
    this.title = 'Neew title'
  }
}
