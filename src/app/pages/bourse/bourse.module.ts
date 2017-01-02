import {NgModule} from '@angular/core';

import {BourseComponent}   from './bourse.component';
import {BourseService} from "./bourse.service";
import {routing} from './bourse.routing';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    exports: [],
    declarations: [BourseComponent],
    providers: [BourseService],
})
export default class BourseModule {
}
