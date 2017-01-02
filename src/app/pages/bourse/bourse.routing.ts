import {Routes, RouterModule}  from '@angular/router';
import {BourseComponent} from "./bourse.component";

const routes: Routes = [
    {
        path: '',
        component: BourseComponent
    }
];

export const routing = RouterModule.forChild(routes);