import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  text: string;
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onModelChange() {
    this.emitter.emit({ text: this.text });
  }

  limpar(): void {
    this.text = undefined;
  }

}
