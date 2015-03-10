import {Component, Template, Foreach} from 'angular2/angular2';
import {Tabs} from './tabs/tabs';
import {Pane} from './tabs/pane';

@Component({
  selector: 'app',
})
@Template({
  url: 'app.html',
  directives: [Tabs, Pane, Foreach]
})
export class App {
  constructor() {
    this.lastPane = { title: 'The Third', html: '<b>Third</b> Content' };
  }
}
