import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

	onlyOdds:boolean = false;
	@Output() status = new EventEmitter<boolean>()


  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
  	this.onlyOdds = !this.onlyOdds;
  	this.status.emit(this.onlyOdds);
  }

}
