import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  providers: [DataService]
})

export class DirectoryComponent implements OnInit {
  directoryTitle:string = "Directory Component";
  term:any;
  type:any;
  value:any;
  calc:string;
  calcs:any = [];

  remove(val:string) {
    console.log(val);
  }

  constructor(private route: ActivatedRoute, 
              private logger: LoggingService,
              private dataService: DataService) {
    this.calc = route.snapshot.params['calc'];
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      console.log(snapshot.val());
      this.calcs.push(snapshot.val())
    })
  }

  fbPostData(type: string, value: any) {
    firebase.database().ref('/').push({type: type, value: value, color: "green"})
  }
}
