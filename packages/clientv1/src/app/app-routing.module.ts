import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
    path: '',
    component: MainComponent,
    children: [{
        path: '',
        loadChildren: () => import('./main/home/home.module').then(res => res.HomeModule)
    }, {
        path: 'home',
        loadChildren: () => import('./main/home/home.module').then(res => res.HomeModule)
    }, {
        path: 'mine',
        loadChildren: () => import('./main/mine/mine.module').then(res => res.MineModule)
    }]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
