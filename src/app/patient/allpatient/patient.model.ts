export class Patient {
  id: number;
  profile_image: string;
  first_name: string;
  gender: string;
  bGroup: string;
  dob: string;
  address: string;
  mobile: string;
  treatment: string;
  patient_op: string;

  constructor(patient) {
    {
      this.id = patient.id || this.getRandomID();
      this.profile_image = patient.profile_image || 'assets/images/user/user1.jpg';
      this.first_name = patient.first_name || '';
      this.gender = patient.gender || 'male';
      this.bGroup = patient.email || '';
      this.dob = patient.dob || '';
      this.address = patient.address || '';
      this.mobile = patient.mobile || '';
      this.treatment = patient.treatment || '';
      this.patient_op = patient.patient_op || '';
    }
  }

  public getRandomID(): string {
    var S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }


}
