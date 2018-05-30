import { Component, OnInit, Input } from '@angular/core';
import { WallNote } from '../../../models/wallNote.model';

@Component({
  selector: 'app-view-note-modal',
  templateUrl: './view-note-modal.component.html',
  styleUrls: ['./view-note-modal.component.scss']
})
export class ViewNoteModalComponent implements OnInit {

  @Input() note: WallNote = {} as WallNote;
  
  constructor() { }

  ngOnInit() {
  }

}
