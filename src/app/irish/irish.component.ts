import { Component, OnInit } from '@angular/core';
import {HalfService} from '../half.service';

@Component({
  selector: 'app-irish',
  templateUrl: './irish.component.html'
})
export class IrishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  uimhir : number;
	leath : number;

  	fuairHalf() {
  		this.leath = this.uimhir/2;
  	}

}
