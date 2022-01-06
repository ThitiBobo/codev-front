import {Component, HostBinding} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codev-front';
  version = '1.0'

  constructor(public overlayContainer: OverlayContainer) {}

  onSetTheme(theme: string) {
    this.overlayContainer.getContainerElement().classList.add(theme);
  }

}
