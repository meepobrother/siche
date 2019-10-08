import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: `app-main`,
    templateUrl: `./main.component.html`
})
export class MainComponent {
    hidden: boolean = false;
    fullScreen: boolean = false;
    topFlag: boolean = false;
    tintColor: string = '#108ee9';
    unselectedTintColor: string = '#888';
    tabbarStyle: object = { height: '100vh' };
    selectedIndex: number = 1;


    tabs: any[] = [{
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        title: 'Life',
        badge: '1',
        dot: false,
        link: '/home'
    }, {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
        selectedIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
        title: 'Koubei',
        badge: 'new',
        dot: false
    }, {
        icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
        selectedIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
        title: 'Friend',
        dot: true
    }, {
        icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        selectedIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
        title: '我的',
        dot: true,
        link: '/mine'
    }];

    constructor(private route: Router) { }

    showTabBar(event: Event) {
        event.preventDefault();
        this.hidden = !this.hidden;
    }

    tabBarTabOnPress(pressParam: { index: number, key: number, title: string }) {
        try {
            this.selectedIndex = pressParam.index;
            const item = this.tabs[pressParam.index];
            if (item.link) {
                this.route.navigateByUrl(item.link);
            }
        } catch (e) {
            this.route.navigateByUrl('/');
        }
    }
}
