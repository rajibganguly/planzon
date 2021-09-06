import { Component } from '@angular/core';

import { PingService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w3evideo';

  constructor(private pingService: PingService) {}
}
