import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  companyName;
  companyAdress ;
  companyContact;
  companyWebsite;

  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
            this.companyName = params['companyName'].replace("%20"," ");
            this.companyWebsite ='www.'+params['companyName'].replace("%20"," ")+'.com';
            this.companyAdress = params['companyName'].replace("%20"," ") + ' ,Jaipur ,Rajasthan , India'
            this.companyContact = params['companyName'].replace("%20"," ")+'@gmail.com'
          });
  }

}
