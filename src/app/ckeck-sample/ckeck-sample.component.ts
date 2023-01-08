import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-ckeck-sample',
  templateUrl: './ckeck-sample.component.html',
  styleUrls: ['./ckeck-sample.component.css'],
})
export class CkeckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  qtd: number = 0

  constructor() {}

  adicionar() {
    this.qtd += 1
  }

  decrementar() {
    this.qtd -= 1
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Destruindo o componente')
  }
}
