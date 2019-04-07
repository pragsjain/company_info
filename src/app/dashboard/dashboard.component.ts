import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  companyName = new FormControl();
  options: string[]= ['Company A', 'Company AB','Company ABC','Company ABCD', 'Company ABCDE','Company F'];
  filteredOptions: Observable<string[]>;

  constructor(private service:DataService){}
  ngOnInit() {
    this.filteredOptions = this.companyName.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(filterValue.length>2){
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
     // this.service.get(' https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name='+filterValue)
     this.service.getByJson('../../../assets/getCompanies.json') 
     //this.service.getByJson('./getCompanies.json')
       .subscribe(
        res => {
          this.options=JSON.parse(res['companies']);  
          console.log(this.options);   
          return this.options.filter(option => option.toLowerCase().includes(filterValue));
       })
    }
    else return [];
    
  }

}
