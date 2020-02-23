import { map, debounceTime, distinctUntilChanged, switchMap, catchError, pluck } from 'rxjs/operators';
import { CarroService } from './../shared/carro.service';
import { Subject, Subscription, of, from } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-jur-typehead',
  templateUrl: './jur-typehead.component.html',
  styleUrls: ['./jur-typehead.component.css']
})
export class JurTypeheadComponent implements OnInit, OnDestroy {

  public keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;
  public selectedItem: any;
  @ViewChild('typehead', {static: false}) typehead: ElementRef;

  list: any[] = [];

  constructor(private carroService: CarroService, private renderer: Renderer2) {}

  ngOnInit() {
    this.subscription = this.keyUp.pipe(
      map(event => (event.target as HTMLInputElement).value.trim()),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term =>  {
        if (term.length === 0) {
          return of([]);
        } else if (term.length < 3) {
          return from([]);
        }
        return this.carroService.search(term).pipe(
          pluck('body'),
          catchError(() => {
            return of([]);
          }));
        })
    ).subscribe(res => {
      this.list = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onItemSelected(selectedItem: any) {
    this.selectedItem = selectedItem;
    this.list = [];
    this.typehead.nativeElement.value = '';
    setTimeout(() => this.typehead.nativeElement.focus(), 0);
  }

}
