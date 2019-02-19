import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServername = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; // This is a local reference fetch throw ViewChild()

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) { // This method triggers the onServerAdded() method in app.component.ts file thanks to Output and EventEmitter properties
    this.serverCreated.emit({
      serverName: nameInput.value, // This is a local reference passed by the method
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
