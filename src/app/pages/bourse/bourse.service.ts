import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
@Injectable()
export class BourseService {
    private url = 'http://localhost:3030';
    private socket;
    constructor(private http:Http) { }

    getMessage() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('message', (data) => {
                observer.next(data);
            });
        })
        return observable;
    }
}