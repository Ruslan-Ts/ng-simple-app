import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";
       
@Component({
    selector: "test-comp",
    standalone: true,
    template: `<p>Hello {{name}}</p>`
})
export class ChildComponent implements OnInit, OnChanges { 
    @Input() name: string = "";
  
    constructor(){ console.log("constructor"); }
    
    ngOnInit() { console.log("onInit"); }
      
    ngOnChanges(changes: SimpleChanges) {
      for (let propName in changes) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
}