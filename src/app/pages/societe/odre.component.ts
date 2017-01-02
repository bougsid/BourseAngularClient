/**
 * Created by ayoub on 11/20/2016.
 */
import {Component, OnChanges, SimpleChanges, Input} from '@angular/core';
import {routes} from "../../app.routing";
import {RouterModule} from "@angular/router";
import {SocieteService} from "./societe.service";
import {IDictionary} from "./hoverTable/hoverTable.component";

@Component({
    selector: 'ordre',
    template: require('./ordre.template.html')
})
export class OrdreComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges) {
        this.loadPage(0);
    }


    private columns: Array<IDictionary> = [
        {key: 'actionPrice', value: 'Prix de l\'Action'},
        {key: 'actionsCount', value: 'Nombre des Actions'},
        {key: 'date', value: 'Date'},
    ];
    @Input()
    private code;
    private totalPages;
    private ordres;
    private defaultSize = 3;

    constructor(private societeService: SocieteService) {
        // this.societeService.getSocietes(0, this.defaultSize).subscribe(result => {
        //     this.societes = result;
        //     console.log(this.societes);
        //     this.totalPages = this.societeService.totalPages;
        // });
    }

    loadPage(page: Number) {
        this.societeService.getOrdres(this.code, page, this.defaultSize).subscribe(result => {
            this.ordres = result;
            this.totalPages = this.societeService.totalOrdrePages;
        });
    }

}

export const routing = RouterModule.forChild(routes);
