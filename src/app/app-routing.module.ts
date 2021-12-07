import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiseaseTypeComponent } from './disease-type/disease-type.component';
import { CountryComponent } from './country/country.component';
import { DiseaseComponent } from './disease/disease.component';
import { DiscoverComponent } from './discover/discover.component';
import { UserComponent } from './user/user.component';
import { PublicServantComponent } from './public-servant/public-servant.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SpecializeComponent } from './specialize/specialize.component';
import { RecordComponent } from './record/record.component';
const routes: Routes = [
  { path: 'country', component:CountryComponent},
  { path: 'diseasetype', component:DiseaseTypeComponent},
  { path: 'disease', component:DiseaseComponent},
  { path: 'discover', component:DiscoverComponent},
  { path: 'user', component:UserComponent},
  { path: 'publicservant', component:PublicServantComponent},
  { path: 'doctor', component:DoctorComponent},
  { path: 'specialize', component:SpecializeComponent},
  { path: 'record', component:RecordComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
