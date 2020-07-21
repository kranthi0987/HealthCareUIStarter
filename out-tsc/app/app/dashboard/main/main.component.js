import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from "../shared/main.service";
let MainComponent = class MainComponent {
    constructor(main) {
        this.main = main;
        // area chart start
        this.areaChartOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                cornerRadius: 3,
                intersect: false
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true
                }
            },
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        };
        this.areaChartData = [
            {
                label: 'New Patients',
                data: [0, 105, 190, 140, 270],
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 4,
                borderColor: 'rgba(37,188,232,.7)',
                pointBackgroundColor: 'rgba(37,188,232,.2)',
                backgroundColor: 'rgba(37,188,232,.2)',
                pointBorderColor: 'transparent'
            },
            {
                label: 'Old Patients',
                data: [0, 152, 80, 250, 190],
                borderWidth: 4,
                pointStyle: 'circle',
                pointRadius: 4,
                borderColor: 'rgba(72,239,72,.7)',
                pointBackgroundColor: 'rgba(72,239,72,.2)',
                backgroundColor: 'rgba(72,239,72,.2)',
                pointBorderColor: 'transparent'
            }
        ];
        this.areaChartLabels = ['January', 'February', 'March', 'April', 'May'];
        // area chart end
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [
                    {
                        ticks: {
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontFamily: 'Poppins',
                            fontColor: '#9aa0ac' // Font Color
                        }
                    }
                ]
            }
        };
        this.barChartLabels = [
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [58, 60, 74, 78, 55, 64, 42], label: 'New Patients' },
            { data: [30, 45, 51, 22, 79, 35, 82], label: 'Old Patients' }
        ];
        this.barChartColors = [
            {
                backgroundColor: 'rgba(211,211,211,1)',
                borderColor: 'rgba(211,211,211,1)',
                pointBackgroundColor: 'rgba(211,211,211,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(211,211,211,0.8)'
            },
            {
                backgroundColor: 'rgba(110, 104, 193, 1)',
                borderColor: 'rgba(110, 104, 193,1)',
                pointBackgroundColor: 'rgba(110, 104, 193,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(110, 104, 193,0.8)'
            }
        ];
    }
    // get count of patients
    getPatientsCount() {
        const formData = new FormData();
        formData.append("doc_id", localStorage.getItem("doc_id"));
        const countObservable = this.main.getPatientsCount(formData);
        countObservable.subscribe((response) => {
            this.patientcount = response;
            console.log(response);
        }, error => {
        }, () => {
        });
    }
    // end bar chart
    ngOnInit() {
        $('#sparkline').sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
            type: 'bar'
        });
        $('#sparkline2').sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
            type: 'line'
        });
        $('#sparkline3').sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
            type: 'line'
        });
        $('#sparkline4').sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4], {
            type: 'discrete'
        });
        $('#sparkline5').sparkline([1, 1, 2], {
            type: 'pie'
        });
        $('#sparkline6').sparkline([2, -4, 5, 2, 0, 4, -2, 4], {
            type: 'bar'
        });
        this.getPatientsCount();
    }
};
MainComponent = __decorate([
    Component({
        selector: 'app-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.scss']
    }),
    __metadata("design:paramtypes", [MainService])
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map