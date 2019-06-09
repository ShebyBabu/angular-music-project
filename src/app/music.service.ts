import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }


  getTrendMusic():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=920f792ee345290b28ca1b88329197b4&format=json");
  }

  getMusic(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=920f792ee345290b28ca1b88329197b4&track=${value}&format=json`;
    return this.http.get(url);
  }
}
