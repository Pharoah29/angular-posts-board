import { Component, OnInit } from "@angular/core";
import { WallNote } from "../../models/wallNote.model";

@Component({
  selector: "app-wall",
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.scss"]
})
export class WallComponent implements OnInit {

  selectedNote = {} as WallNote;
  

  notes: WallNote[] = [];

  constructor() {}

  ngOnInit() {}

  onAdddNote(note: WallNote) {
    //add the node to the board
    this.notes.unshift(Object.assign({}, note));
  }

  showSelectedNote(note: WallNote) {
    this.selectedNote = Object.assign({}, note);
  
  }
}
