import {Component, Template, Parent, Foreach} from 'angular2/angular2';
import {Tabs} from './tabs';

@Component({
  selector: 'pane',
  bind: {
    title: 'title'
  }
})
@Template({
  url: 'tabs/pane.html',
  directives: [Tabs]
})
export class Pane {
  constructor(@Parent() tabs: Tabs) {
    tabs.addPane(this);
  }
}
