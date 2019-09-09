import { ResponseFarmer } from './../model/farmer.model';
import {MatTableDataSource} from '@angular/material/table';
import { FarmerService } from './../service/farmer.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-farmer-search',
  templateUrl: './farmer-search.component.html',
  styleUrls: ['./farmer-search.component.scss']
})
export class FarmerSearchComponent implements OnInit {

// @Output() searched =  new EventEmitter();


  
  responseFarmer: ResponseFarmer;
  
  constructor(private farmerService: FarmerService) { }

  ngOnInit() {
    this.farmerService.getFarmers()
    .subscribe(res => this.responseFarmer = res)    
  }



// doSearch(event) {
//   const informationSearch = event.target.value;
//   this.searched.emit();
// }
  

}
