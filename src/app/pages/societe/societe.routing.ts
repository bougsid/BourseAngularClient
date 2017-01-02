import { Routes, RouterModule }  from '@angular/router';
import { SocieteComponent } from './societe.component';

const routes: Routes = [
    {
        path: '',
        component: SocieteComponent
    }
];

export const routing = RouterModule.forChild(routes);