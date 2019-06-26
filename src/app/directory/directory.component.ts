import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit {
  directoryTitle:string = "Digital Trace";
  term:any;
  type:any;
  value:any;
  calc:string;
  loading:boolean;
  submitted:boolean;
  calcs:any = [];

  public num1:number;
  public num2:number;
  public result:number;
  public activeType:any;
  public finalString:string;
  public operation = {
    add: "add",
    subtract: "subtract",
    divide: "divide",
    multiply: "multiply",
    color: undefined,
    symbol: undefined
  };

  constructor(private logger: LoggingService) { }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    this.fbGetData();
  }

  changeOperation(val:any) {
    if (val == this.operation.add) {
      this.activeType = this.operation.add;
      this.operation.symbol = "+";
      this.operation.color = "green";
    }
    else if (val == this.operation.subtract) {
      this.activeType = this.operation.subtract;
      this.operation.symbol = "-";
      this.operation.color = "powderBlue";
    }
    else if (val == this.operation.divide) {
      this.activeType = this.operation.divide;
      this.operation.symbol = "/";
      this.operation.color = "orange";
    }
    else {
      this.activeType = this.operation.multiply;
      this.operation.symbol = "*";
      this.operation.color = "brown";
    }
  }

  remove(index:any) {
    console.log(index);
    firebase.database().ref('/').child(index).remove();
  }

  fbGetData() {
    this.loading = true;
    firebase.database().ref('/').on('child_added', 
    (snapshot:any) => {
      if (snapshot) {
        this.calcs.unshift(snapshot.val())
      }
      this.loading = false;
    },
    (error:any) => {
      console.error(error);
      this.loading = false;
    });
  }

  fbPostData(event) {
    event.preventDefault();
    this.submitted = true;
    if (!this.num1 && this.num1 !== 0 || !this.num2 && this.num2 !== 0) return;

    if (!this.activeType) {
      this.activeType = "add";
      this.result = Number(this.num1 + this.num2);
      this.operation.symbol = "+";
      this.operation.color = "green";
    }

    else {
      if (this.activeType === this.operation.add) {
        this.result = Number(this.num1 + this.num2);
      }
      else if (this.activeType === this.operation.subtract) {
        this.result = Number(this.num1 - this.num2);
      }
      else if (this.activeType === this.operation.divide) {
        this.result = Number(this.num1 / this.num2);
      }
      else {
        this.result = Number(this.num1 * this.num2);
      }
    }

    this.finalString = this.num1 + " " + this.operation.symbol + " " + this.num2 + " = " + this.result;

    let mathObject = {
      type: this.activeType, 
      value: this.finalString, 
      color: this.operation.color
    };

    console.log(mathObject) 
    firebase.database().ref('/').push(mathObject)
  }
}
