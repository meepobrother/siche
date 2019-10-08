import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
    current: number = 1;
    steps: any[] = [{
        title: '行程',
        status: 1
    }, {
        title: '乘客',
        status: 2
    }, {
        title: '接客',
        status: 3
    }, {
        title: '送客',
        status: 4
    }, {
        title: '结束',
        status: 5
    }];
    constructor() { }

    ngOnInit() { }

    setStep(it: any) {
        this.current = it.status;
    }

    prev() {
        if (this.current > 1) {
            this.current -= 1;
        }
    }

    next() {
        if (this.current < 5) {
            this.current += 1;
        }
    }

}
