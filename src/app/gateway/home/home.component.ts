import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMsgShown: boolean = true;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.isMsgShown$.subscribe(data => this.isMsgShown = data);
  }

  onActivate() {
    this.isMsgShown = false;
  }

}
