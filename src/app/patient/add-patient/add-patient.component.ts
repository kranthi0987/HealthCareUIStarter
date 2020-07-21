import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from "../allpatient/patient.service";
import {LoginResponse} from "../../authentication/shared/loginResponse.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.sass']
})
export class AddPatientComponent {
  patientForm: FormGroup;
  codeGenerated: string; // for 7 digit code
  constructor(public patientservice: PatientService,
              private router: Router,
              private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      patientId: [this.randomString()],
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      gender: ['', [Validators.required]],
      mobile: [''],
      dob: ['', [Validators.required]],
      age: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      maritalStatus: [''],
      address: [''],
      bGroup: [''],
      bPresure: [''],
      sugger: [''],
      injury: [''],
      uploadImg: ['']
    });
  }

  randomString() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 7;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    this.codeGenerated = randomstring;
    return 0;
  }

  uploadFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.patientForm.get('uploadImg').setValue(file);
    }
  }

  onSubmit() {
    console.log('Form Value', this.patientForm.value);
    const formData: any = new FormData();
    formData.append("patient_op", this.patientForm.get('patientId').value);
    formData.append("first_name", this.patientForm.get('first').value);
    formData.append("last_name", this.patientForm.get('last').value);
    formData.append("gender", this.patientForm.get('gender').value);
    formData.append("mobile", this.patientForm.get('mobile').value);
    formData.append("dob", this.patientForm.get('dob').value);
    formData.append("age", this.patientForm.get('age').value);
    formData.append("email", this.patientForm.get('email').value);
    formData.append("marital_status", this.patientForm.get('maritalStatus').value);
    formData.append("address", this.patientForm.get('address').value);
    formData.append("bgroup", this.patientForm.get('bGroup').value);
    formData.append("bpresure", this.patientForm.get('bPresure').value);
    formData.append("sugger", this.patientForm.get('sugger').value);
    formData.append("injury", this.patientForm.get('injury').value);
    formData.append("img", this.patientForm.get('uploadImg').value);
    formData.append("doc_id", localStorage.getItem("doc_id"));

    const patientObservable = this.patientservice.addPatient(formData);
    patientObservable.subscribe(() => {
    }, error => {
    }, () => {
      this.router.navigate(['/dashboard']);
    });
    // const loginObservable = this.authService.postLogin(loginRequest);
    // loginObservable.subscribe(
    //   (loginResponse: LoginResponse) => {
    //     this.loginReponse = loginResponse;
    //     localStorage.setItem('token', loginResponse.token);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     this.router.navigate(['/dashboard']);
    //   }
    // );
  }
}
