import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MusesPiazza } from './app.component';
import { AboutPage } from '../pages/about/about';
import { NotificationPage } from '../pages/notification/notification';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MusesPiazza,
    AboutPage,
    NotificationPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MusesPiazza)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MusesPiazza,
    AboutPage,
    NotificationPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
