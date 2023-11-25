import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(public dbzService: DbzService) {}
}
