import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../authentication/shared/auth.service";
@NgModule({
  imports: [CommonModule],
  providers: [AuthService],
})
export class LayoutModule {}
