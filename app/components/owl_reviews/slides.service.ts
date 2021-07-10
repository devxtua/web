import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Slide } from './slide';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class SlidesService {

    constructor(private http: Http){
        // console.log(http.request('./slides.json').subscribe());
        // http.request('app/components/owl_banner/slides.json')
        //     .subscribe(result => this.slides = result.json());
    }

    getSlides(): Observable<Slide[]> {
        return this.http.get('app/components/owl_banner/slides.json')
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData (res: Response) {
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? error.status+ ' - ' + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}