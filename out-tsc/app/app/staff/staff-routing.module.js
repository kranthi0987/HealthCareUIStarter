import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllstaffComponent } from './allstaff/allstaff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
const routes = [
    {
        path: 'all-staff',
        component: AllstaffComponent
    },
    {
        path: 'add-staff',
        component: AddStaffComponent
    },
    {
        path: 'edit-staff',
        component: EditStaffComponent
    },
    {
        path: 'staff-profile',
        component: StaffProfileComponent
    }
];
let StaffRoutingModule = class StaffRoutingModule {
};
StaffRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], StaffRoutingModule);
export { StaffRoutingModule };
//# sourceMappingURL=staff-routing.module.js.map