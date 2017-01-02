/**
 * Created by ayoub on 11/20/2016.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { SocieteComponent } from './societe.component';
import { routing } from './societe.routing';
import {HoverTable} from "./hoverTable/hoverTable.component";
import {SocieteService} from "./societe.service";
import {FormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {Pagination} from "./pagination.component";
import {OrdreComponent} from "./odre.component";
import {FilterPipe} from "./filter.pipe";
import { AUTH_PROVIDERS } from 'angular2-jwt';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        Ng2SmartTableModule,
        routing
    ],
    declarations: [
        HoverTable,
        Pagination,
        OrdreComponent,
        SocieteComponent,
        FilterPipe
    ],
    providers: [
      SocieteService,
    ]
})
export default class SocieteModule {}
