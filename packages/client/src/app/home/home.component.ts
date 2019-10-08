import { Component, OnInit } from '@angular/core';
declare const AMap: any;
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const map = new AMap.Map('route-map-container', {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
    }

}
