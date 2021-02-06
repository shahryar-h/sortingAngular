import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.sass']
  
})

export class BubbleSortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }


  title = "Bubble Sort"
  numbers = [3,4,6,5,2,1]
  // form = new FormGroup(){
  //   topics: new FormArray([])
  // };

  test = ""

  generate(val:string){

    var arrayOfNumbers = val.split(',').map(Number);
    
    
    this.numbers = arrayOfNumbers;
    console.log(this.numbers);
    

  }

  swap(j:number, numz:number[]) {
    let tmp = numz[j];
    numz[j] = numz[j + 1];
    numz[j + 1] = tmp;
  }
  private sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  selected = true;
  async sortNumbers(){
    subscription: Subscription;

      let len = this.numbers.length;
      for (let i = 0; i < len; i++) {
        
          for (let j = 0; j < len; j++) {
              
              if (this.numbers[j] > this.numbers[j + 1]) {
                await this.sleep(1000)
                this.swap(j,this.numbers);
                
                
              
            } 
            interval(1000)
            .subscribe(() => {
              // place you code here
            });  
      }
  }
}
}
