import { Component, OnInit } from '@angular/core';
declare const AMap: any;
@Component({
    selector: 'app-car-route',
    templateUrl: './car-route.component.html',
    styleUrls: ['./car-route.component.scss']
})
export class CarRouteComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const map = new AMap.Map('container', {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        const driving = new AMap.Driving({
            map,
            panel: 'panel'
        });
        driving.search(
            new AMap.LngLat(116.379028, 39.865042),
            new AMap.LngLat(116.427281, 39.903719), {
            waypoints: [
                new AMap.LngLat(116.379028, 39.885042),
                new AMap.LngLat(116.389028, 39.885042),
                new AMap.LngLat(116.379028, 39.895042),
                new AMap.LngLat(116.369028, 39.895042),
                new AMap.LngLat(116.35028, 39.895042),
            ]
        }, function (status, result) {
            if (status === 'complete') {
                console.log('绘制驾车路线完成')
            } else {
                console.log('获取驾车数据失败：' + result)
            }
        });
    }

}
