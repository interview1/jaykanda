import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DatagridComponent,
    EditDetailsComponent,
    AddFormComponent,
    ChartComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents(null),
    ChartsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
