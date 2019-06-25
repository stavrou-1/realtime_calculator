import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() calc:Object;// is this the correct way to define Object type?

  homeTitle:string = "Home Component";

  constructor(private logger: LoggingService) {
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
  }

}
