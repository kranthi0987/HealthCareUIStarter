import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as RecordRTC from 'recordrtc';
let CameraComponent = class CameraComponent {
    constructor() {
    }
    ngAfterViewInit() {
        // set the initial state of the video
        const video = this.video.nativeElement;
        video.muted = false;
        video.controls = true;
        video.autoplay = false;
    }
    toggleControls() {
        const video = this.video.nativeElement;
        video.muted = !video.muted;
        video.controls = !video.controls;
        video.autoplay = !video.autoplay;
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
        const video = this.video.nativeElement;
        video.src = window.URL.createObjectURL(stream);
        this.toggleControls();
    }
    errorCallback() {
        // handle error here
    }
    processVideo(audioVideoWebMURL) {
        const video = this.video.nativeElement;
        const recordRTC = this.recordRTC;
        video.src = audioVideoWebMURL;
        this.toggleControls();
        const recordedBlob = recordRTC.getBlob();
        recordRTC.getDataURL(function (dataURL) { });
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
};
__decorate([
    ViewChild('video'),
    __metadata("design:type", Object)
], CameraComponent.prototype, "video", void 0);
CameraComponent = __decorate([
    Component({
        selector: 'app-camera',
        templateUrl: './camera.component.html',
        styleUrls: ['./camera.component.sass']
    }),
    __metadata("design:paramtypes", [])
], CameraComponent);
export { CameraComponent };
//# sourceMappingURL=camera.component.js.map