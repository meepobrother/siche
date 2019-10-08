import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    navs: any[] = [{
        title: '行程',
        link: '/car-route'
    }, {
        title: '我的',
        link: '/mine'
    }];
    constructor() { }

    ngOnInit() {
    }

}
