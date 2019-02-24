import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { CommonapiService } from '../commonapi.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  editForm: any;
  editFormData: any;
  editFormId: string;
  name: string;
  email: string;
  gender: string;

  constructor(
    private editFormBuilder : FormBuilder,
    private commonApi : CommonapiService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.editForm = this.editFormBuilder.group({
      first_name : [''],
      email : [''],
      gender : ['']
    });

    this.route.params.subscribe(params => {
      this.editFormId = params['id'];
    });

    this.commonApi.editEmployee(this.editFormId).subscribe((res: any) => {
      this.name = res.first_name;
      this.email = res.email;
      this.gender = res.gender;
    }, (err) => {
      console.log("Error ==>", err);
    });
  }

  goToGrid() {
    this.router.navigate(['/details']);
  }

  updateForm(updatedValue) {
    console.log('updated value ===>', updatedValue);
    this.commonApi.updateEmployee(this.editFormId, updatedValue).subscribe();
  }

}
