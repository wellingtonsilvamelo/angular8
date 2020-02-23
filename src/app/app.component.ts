import { TextEditorComponent } from './text-editor/text-editor.component';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  // @ViewChild('tesauro', {static: false}) tesauro: SelectTesauroTextComponent;

  people$: Observable<any[]>;
  selectedPeople = [{ name: 'Karyn Wright' }];
  qualquer: string;
  list = [];
  @ViewChild (TextEditorComponent, { static: false}) meu: TextEditorComponent;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private dataService: DataService, private modalService: NgbModal) {
  }

  ngOnInit() {
      this.people$ = this.dataService.getPeople();
  }

  clearModel() {
      this.selectedPeople = [];
  }

  changeModel() {
      this.selectedPeople = [{ name: 'New person' }];
  }

  onSelectTsauro(event: any) {
    this.list = event.data;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //
    }, (reason) => {
      this.meu.limpar();
      this.qualquer = undefined;
    });
  }

  onEventEmitted(event: any): void {
    this.qualquer = event.text;
  }

}
