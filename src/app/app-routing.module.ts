import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
    { path: '', component: TabsComponent, pathMatch: 'full' },
    { path: 'details', component: TabsComponent, pathMatch: 'full' },
    { path: 'addEmployee', component: AddFormComponent, pathMatch: 'full' },
    { path: 'editEmployee/:id', component: EditDetailsComponent, pathMatch: 'full' }    
];

@NgModule({
 imports: [
      RouterModule.forRoot(routes)
 ],
 exports: [ RouterModule ],
 declarations: []
})

export class AppRoutingModule {}