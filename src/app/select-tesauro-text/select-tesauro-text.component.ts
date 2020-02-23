import { Component, OnInit, EventEmitter, Output, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-select-tesauro-text',
  templateUrl: './select-tesauro-text.component.html',
  styleUrls: ['./select-tesauro-text.component.css']
})
export class SelectTesauroTextComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() emissorEvento: EventEmitter<any> = new EventEmitter();

  list = [
    {
      id: 1,
      idThesauro: 1,
      cdThesauro: 1,
      dsThesauro: 'TRANSPORTE',
      inCategoria: 1,
      inUtilizavel: 1,
      idThesauronovo: null,
      dsThesauronovo: null,
      dsHierarquia: '1'
    }
  ];

  inputText: string;

  term: any = {
    id: 2,
      idThesauro: 2,
      cdThesauro: 2,
      dsThesauro: 'TRANSPORTE',
      inCategoria: 2,
      inUtilizavel: 2,
      idThesauronovo: 2,
      dsThesauronovo: 'Transportadora',
      dsHierarquia: '2'
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.emissorEvento.emit({ data: this.list});
  }

  ngOnDestroy(): void {
  }


  removeItem(index): void {
    this.list.splice(index, 1);
  }

  onEnter(): void {
    this.list.push(this.term);
    this.term = undefined;
  }

  removeAll(): void {
    this.list.splice(0, this.list.length);
  }

}
