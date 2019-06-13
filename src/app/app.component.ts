import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showSecret: Boolean;
  public logs: string[] = [];

  onToggledBtnClicked() {

    this.logs.push("Toggle Button clicked at: "  + new Date());

    if (this.showSecret) {
      this.showSecret = false;
    } else {
      this.showSecret = true;
    }
  }
}
