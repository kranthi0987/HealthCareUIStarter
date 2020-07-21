import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
const routes = [
    {
        path: 'all-patient',
        component: AllpatientComponent
    },
    {
        path: 'add-patient',
        component: AddPatientComponent
    },
    {
        path: 'edit-patient',
        component: EditPatientComponent
    },
    {
        path: 'patient-profile/:id',
        component: PatientProfileComponent
    }
];
let PatientRoutingModule = class PatientRoutingModule {
};
PatientRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PatientRoutingModule);
export { PatientRoutingModule };
//# sourceMappingURL=patient-routing.module.js.map