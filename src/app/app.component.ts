import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbers = [1,2,3,4,5,6];
  evenNumbers = [];
  oddNumbers = []; 

  ngOnInit() {
  	for(let i = 0;i<this.numbers.length;i++) {
  		if(this.numbers[i]%2==0) {
  			this.evenNumbers.push(this.numbers[i]);
  		}
  		else{
  			this.oddNumbers.push(this.numbers[i]);
  		}
  	}
  }
}
