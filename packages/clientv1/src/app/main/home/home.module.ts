import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        NgZorroAntdMobileModule,
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: HomeComponent
        }])
    ]
})
export class HomeModule { }
