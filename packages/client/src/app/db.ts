import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Db {
    routes: Route[] = [];
    /**
     * 添加行程
     * @param route 行程
     */
    addRoute(route: Route) {
        this.routes.push(route);
    }
}

export class Car {
    carNum: string;
    carColor: string;
    carPhone: string;
}

export class Route {
    /**
     * 出发日期
     */
    startDate: Date;
    /**
     * 出发地
     */
    start: any;
    /**
     * 目的地
     */
    end: any;
    /**
     * 车辆信息
     */
    car: Car;

    /**
     * 途经点
     */
    points: Point[] = [];
    /**
     * 添加途经点
     * @param point 途经点
     */
    addPoint(point: Point) {
        this.points.push(point);
    }
    /**
     * 获取途经点
     */
    getPoints(isStart: boolean) { }
}

export class Point {
    start: any;
    end: any;
    mobile: string;
}
