import { NgModule } from '@angular/core';
import { MineComponent } from './mine.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MineComponent
    ],
    imports: [
        NgZorroAntdMobileModule,
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: MineComponent
        }])
    ]
})
export class MineModule { }
