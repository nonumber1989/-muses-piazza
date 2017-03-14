import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MusesPiazza } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { DiscoverPage } from '../pages/discover/discover';
import { NotificationPage } from '../pages/notification/notification';
import { NavigationPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigationDetails';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MusesPiazza,
    MenuPage,
    DiscoverPage,
    NotificationPage,
    NavigationPage,
    NavigationDetailsPage,
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
    MenuPage,
    DiscoverPage,
    NotificationPage,
    NavigationPage,
    NavigationDetailsPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
