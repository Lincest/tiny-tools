import { Component, OnInit } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-err-page',
  templateUrl: './err-page.component.html',
  styleUrls: ['./err-page.component.css']
})
export class ErrPageComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate
  ) { }

  // wired but works: https://stackoverflow.com/questions/59580289/angular-8-angular-pwa-routing-doesnt-work-with-direct-url
  ngOnInit(): void {
    console.log('[404 and reload]');
    this.swUpdate.available.subscribe(() => {
      window.location.reload();
    });
  }
}
