import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import ICategories from "../../Interfaces/ICategoriesInterface";
import {ApiService} from "../../api/services/api.service";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit{

  searchForm : FormGroup
  categories : ICategories[] = []

  ngOnInit() {
    this.dataService.getCategories().subscribe({
      next: (response) => {
        this.categories = response
        console.log(response)
        this.cdr.detectChanges();
      },
      error: (error) => {
        alert('There was an error in retrieving data from the server');
      }
    })
  }
  constructor(
    private formBuilder : FormBuilder,
    private dataService: ApiService,
    private cdr: ChangeDetectorRef
  ) {
    this.searchForm = this.formBuilder.group({
      search :  new FormControl('')
    })
  }



}
