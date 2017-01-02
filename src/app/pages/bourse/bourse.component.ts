/**
 * Created by ayoub on 11/28/2016.
 */
import {Component, OnInit} from '@angular/core';
import {BourseService} from "./bourse.service";

@Component({
    selector: 'bourse',
    template: require('./bourse.template.html')
})
export class BourseComponent implements OnInit {
    private societes;
    private connection;

    constructor(private bourseService: BourseService) {
    }

    ngOnInit() {
        this.connection = this.bourseService.getMessage().subscribe(message => {
            this.societes = JSON.parse(message);
        })
    }

}
