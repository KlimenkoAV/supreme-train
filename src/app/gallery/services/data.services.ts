import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChannelsResponce } from '../models';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {}
    public getJSON(): Observable<ChannelsResponce> {
        return this.http.get<ChannelsResponce>('../../assets/channels.json');
    }
}
