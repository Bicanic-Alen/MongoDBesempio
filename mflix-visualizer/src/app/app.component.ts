
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient , private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-d2a76fca-e5fb-4a30-8c39-c7fe76e63d3c.ws-eu01.gitpod.io/movies/list/10");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }

  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    if (urltoSanitize ==undefined)
    {
      return false
    }
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
  }




}
