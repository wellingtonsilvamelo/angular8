import { map, debounceTime, distinctUntilChanged, switchMap, catchError, pluck } from 'rxjs/operators';
import { Subject, Subscription, of, from } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { CarroService } from '../shared/carro.service';

@Component({
  selector: 'app-jur-typehead-custom',
  templateUrl: './jur-typehead-custom.component.html',
  styleUrls: ['./jur-typehead-custom.component.css']
})
export class JurTypeheadCustomComponent implements OnInit, OnDestroy {

  public keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;
  @ViewChild('typehead', {static: false}) typehead: ElementRef;
  @Output() itemEmitter: EventEmitter<any> = new EventEmitter<any>();

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
    this.list = [];
    this.typehead.nativeElement.value = '';
    this.itemEmitter.emit({ item : selectedItem });
    setTimeout(() => this.typehead.nativeElement.focus(), 0);
  }

  onClickOutside(event: any) {
    if (event.isClickedOutside) {
      this.list = [];
    }
  }

}
