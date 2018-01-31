import {Component, Inject} from '@angular/core';
import { PassExample } from './testmodule/passage.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Inject('PassExamples') public examples: PassExample[],
    @Inject('PassExamples') public hotPassages: PassExample[]) {
  }
}
