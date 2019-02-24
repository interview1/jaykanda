import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { CommonapiService } from '../commonapi.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {
  addForm:any;
  constructor(
    private addFormBuilder : FormBuilder,
    private commonApi : CommonapiService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addForm = this.addFormBuilder.group({
      first_name : [''],
      email : [''],
      gender : ['']
    });
  }
  
  addEmployee(formValue) {
    console.log("formValue ===>", formValue);
    return this.commonApi.addEmployee(formValue).subscribe();
  }

  goToGrid() {
    this.router.navigate(['/details']);
  }
}
