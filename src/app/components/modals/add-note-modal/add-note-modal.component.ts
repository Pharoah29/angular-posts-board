import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { WallNote } from "../../../models/wallNote.model";


@Component({
  selector: "app-add-note-modal",
  templateUrl: "./add-note-modal.component.html",
  styleUrls: ["./add-note-modal.component.scss"]
})
export class AddNoteModalComponent implements OnInit {
  @Input() note: WallNote = {} as WallNote;

  @Output() add: EventEmitter<WallNote> = new EventEmitter<WallNote>();

  constructor() {}

  ngOnInit() {}

  onAddNote() {
    if (this.note.author && this.note.description) {
    
      this.add.emit(this.note);

      //clear the modal values, ready for next note insertion
      this.note.author = "";
      this.note.description = "";
   
    }
  }
}
