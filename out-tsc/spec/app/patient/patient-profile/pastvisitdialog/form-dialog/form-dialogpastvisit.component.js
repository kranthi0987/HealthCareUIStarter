import { __decorate, __metadata, __param } from "tslib";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, Renderer2, ViewChild } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { PatientService } from "../../../allpatient/patient.service";
import { PastVisitModel } from "../../../models/PastVisitModel";
let FormDialogPastVisitComponent = class FormDialogPastVisitComponent {
    constructor(dialogRef, data, patientService, fb, renderer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.patientService = patientService;
        this.fb = fb;
        this.renderer = renderer;
        this.formControl = new FormControl('', [
            Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'view') {
            this.dialogTitle = data.patient.name;
            this.patient = data.patient;
        }
        else {
            this.dialogTitle = 'New Visit';
            this.patient = new PastVisitModel({});
        }
        this.patientForm = this.createContactForm();
    }
    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }
    createContactForm() {
        return this.fb.group({
            uuid: [this.patient.uuid],
            treatment: [this.patient.treatment],
            consulted_on: [this.patient.consulted_on],
            log_documents: [this.patient.log_documents],
            session_log: [this.patient.session_log],
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.patientService.addPatient(this.patientForm.getRawValue());
    }
    ngAfterViewInit() {
        // set the initial state of the video
        // const video: HTMLVideoElement = this.video.nativeElement;
        this.matVideo.muted = false;
        this.matVideo.controls = true;
        this.matVideo.autoplay = false;
    }
    toggleControls() {
        // const video: HTMLVideoElement = this.video.nativeElement;
        this.matVideo.muted = !this.matVideo.muted;
        this.matVideo.controls = !this.matVideo.controls;
        this.matVideo.autoplay = !this.matVideo.autoplay;
    }
    successCallback(stream) {
        const options = {
            mimeType: 'video/webm',
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 128000,
            bitsPerSecond: 128000 // if this line is provided, skip above two
        };
        this.stream = stream;
        this.recordRTC = RecordRTC(stream, options);
        this.recordRTC.startRecording();
        // const video: HTMLVideoElement = this.video.nativeElement;
        this.matVideo.srcObject = stream;
        this.toggleControls();
    }
    errorCallback() {
        // handle error here
    }
    processVideo(audioVideoWebMURL) {
        // const video: HTMLVideoElement = this.video.nativeElement;
        const recordRTC = this.recordRTC;
        this.matVideo.srcset = audioVideoWebMURL;
        this.toggleControls();
        const recordedBlob = recordRTC.getBlob();
        recordRTC.getDataURL(function (dataURL) {
        });
    }
    startRecording() {
        const mediaConstraints = {
            video: true, audio: true
        };
        navigator.mediaDevices
            .getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
    stopRecording() {
        const recordRTC = this.recordRTC;
        recordRTC.stopRecording(this.processVideo.bind(this));
        const stream = this.stream;
        stream.getAudioTracks().forEach(track => track.stop());
        stream.getVideoTracks().forEach(track => track.stop());
    }
    download() {
        this.recordRTC.save('video.webm');
    }
    ngOnInit() {
        // this.video = this.matVideo.getVideoTag();
        // Use Angular renderer or addEventListener to listen for standard HTML5 video events
        // this.renderer.listen(this.matVideo, 'ended', () => console.log('video ended'));
        // this.matVideo.addEventListener('ended', () => console.log('video ended'));
    }
    ngOnChanges(changes) {
        if (this.matVideo.srcset) {
            this.matVideo.load();
        }
    }
};
__decorate([
    ViewChild('video', { static: false }),
    __metadata("design:type", Object)
], FormDialogPastVisitComponent.prototype, "matVideo", void 0);
FormDialogPastVisitComponent = __decorate([
    Component({
        selector: 'app-form-dialog',
        templateUrl: './form-dialogpastvisit.component.html',
        styleUrls: ['./form-dialogpastvisit.component.sass']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, PatientService,
        FormBuilder,
        Renderer2])
], FormDialogPastVisitComponent);
export { FormDialogPastVisitComponent };
//# sourceMappingURL=form-dialogpastvisit.component.js.map