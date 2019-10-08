import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    state: any = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: '184px'
    };
    constructor() { }

    ngOnInit() {
    }

    onLeftClick() {
        console.log('onLeftClick');
    }

    beforeChange(event) {
        console.log('slide ' + event.from + ' to ' + event.to);
    }

    afterChange(event) {
        console.log('slide to ' + event);
    }

    onClick1() {
        this.state.data.push('AiyWuByWklrrUDlFignR');
    }

}
