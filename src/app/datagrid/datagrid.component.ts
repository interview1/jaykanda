import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonapiService } from '../commonapi.service';
import { Details } from '../details';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  gridData : Array<Details> = [];  
  selectedNodes: any;
  selectedData: any;
  columnDefs = [
    {headerName: 'Emp Name', field: 'first_name', checkboxSelection: true},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Gender', field: 'gender'}
  ];

  constructor(
    private commonApi: CommonapiService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("grid data ===>");
    this.commonApi.getAllDetails().subscribe((res: any) => {
      console.log("grid data ===>", res);
      this.gridData = res;
    }, (err) => {
      console.log("Error ==>", err);
    });
  }

  goToAddPage() {
    this.router.navigate(['/addEmployee']);
  }

  goToEditPage(){
    this.selectedNodes = this.agGrid.api.getSelectedNodes();
    this.selectedData = this.selectedNodes.map( node => node.data );
    console.log('selectedData ===>', this.selectedData);
    this.router.navigate(['/editEmployee', this.selectedData[0]._id]);
    return this.commonApi.editEmployee(this.selectedData[0]._id).subscribe();    
  }

  deleteItem() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    console.log('selectedData ===>', selectedData);
    this.router.navigate(['/']);
    return this.commonApi.removeEmployee(selectedData[0]._id).subscribe();
  }
 }
