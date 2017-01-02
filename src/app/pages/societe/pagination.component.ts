/**
 * Created by ayoub on 11/21/2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'pagination',
    template: require('./pagination.template.html')
})

export class Pagination {
    currentPage: Number = 0;
    private _totalPages: Number;
    pages = [];
    @Output() onLoad = new EventEmitter<Number>();

    constructor() {

    }

    loadPage(page: Number) {
        this.onLoad.emit(page);
        this.currentPage = page;
    }

    @Input()
    set totalPages(value: Number) {
        this._totalPages = value;
        this.currentPage = 0;
        this.pages = [];
        for (var i = 0; i < this._totalPages; i++) {
            this.pages[i] = i + 1;
        }
    }
}
