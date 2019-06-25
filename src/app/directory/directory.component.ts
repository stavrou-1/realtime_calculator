import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit {
  directoryTitle:string = "Directory Component";
  calc:string;
  calcs = [
    {type:"Multiply",value:"2*3=6",color:'orange'},
    {type:"Add",value:"5+5=10",color:'green'},
    {type:"Subtract",value:"10-4=6",color:'red'}
  ];

  remove(val:string) {
    console.log(val);
  }

  constructor(private route: ActivatedRoute, 
              private logger: LoggingService) {
    this.calc = route.snapshot.params['calc'];
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
  }

    
}
