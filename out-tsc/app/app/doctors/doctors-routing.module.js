import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlldoctorsComponent } from './alldoctors/alldoctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
const routes = [
    {
        path: 'allDoctors',
        component: AlldoctorsComponent
    },
    {
        path: 'add-doctor',
        component: AddDoctorComponent
    },
    {
        path: 'edit-doctor',
        component: EditDoctorComponent
    },
    {
        path: 'doctor-profile',
        component: DoctorProfileComponent
    }
];
let DoctorsRoutingModule = class DoctorsRoutingModule {
};
DoctorsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DoctorsRoutingModule);
export { DoctorsRoutingModule };
//# sourceMappingURL=doctors-routing.module.js.map