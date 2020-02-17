import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Themeswitcher} from './services/themeswitcher';
import {FeedbackService} from './services/feedback.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LayoutSizeService} from './services/layout-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FeedbackService, AngularFirestore]
})
export class AppComponent implements OnInit{
  screenWidth: number;

  constructor(public themeSwitcher: Themeswitcher, private layoutSizeService: LayoutSizeService) {
  }

  ngOnInit() {
    this.themeSwitcher.onDarkTheme('dark-theme');
    this.layoutSizeService.setSmallScreen(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.layoutSizeService.setSmallScreen(window.innerWidth);
  }

}
