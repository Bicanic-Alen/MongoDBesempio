
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
    this.obs = this.http.get("https://3000-e7d9ded5-365c-40d3-bab6-1d4604d94e2f.ws-eu01.gitpod.io/movies/list/10");
    this.obs.subscribe(this.getData);
  }
  loadMoviesOf2000(){
    this.obs = this.http.get("https://3000-e7d9ded5-365c-40d3-bab6-1d4604d94e2f.ws-eu01.gitpod.io/movies/year/2000");
    this.obs.subscribe(this.getData);
  }
  loadMoviesOfTomCruise(){
    this.obs = this.http.get("https://3000-e7d9ded5-365c-40d3-bab6-1d4604d94e2f.ws-eu01.gitpod.io/advanced-search/actors/Tom Cruise");
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
