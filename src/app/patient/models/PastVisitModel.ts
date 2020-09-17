export class PastVisitModel {
  uuid: string;
  patientId: string;
  treatment: string;
  consulted_on: string;
  // log_documents: string;
  session_log: string;

  constructor(pastvisit) {
  {
    this.uuid = pastvisit.uuid || '';
    this.treatment = pastvisit.treatment || '';
    this.consulted_on = pastvisit.consulted_on || '';
    // this.log_documents = pastvisit.log_documents || '';
    this.session_log = pastvisit.session_log || '';
    this.patientId = pastvisit.patientId || '';
    // this.date = patient.date || '';
    // this.address = patient.address || '';
    // this.mobile = patient.mobile || '';
    // this.treatment = patient.treatment || '';
  }
}
}
