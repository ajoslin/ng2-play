import {Component, Template} from 'angular2/angular2';
import {Foreach} from 'angular2/angular2';
import {Pane} from './pane';

@Component({
  selector: 'tabs',
})
@Template({
  url: 'tabs/tabs.html',
  directives: [Pane, Foreach]
})
export class Tabs {
  constructor() {
    this.panes = [];
  }
  addPane(pane) {
    this.panes.push(pane);
    if (!this.selectedPane) {
      this.select(pane);
    }
  }
  select(pane) {
    for (let p of this.panes) {
      if (p.selected) p.selected = false;
    }
    pane.selected = true;
    this.selectedPane = pane;
  }
  isSelected(pane) {
    return this.selectedPane === pane;
  }
}
