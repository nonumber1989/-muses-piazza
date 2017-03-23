import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MusesPiazza } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { DiscoverPage } from '../pages/discover/discover';
import { NotificationPage } from '../pages/notification/notification';
import { NavigationPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigationDetails';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

export function musesPiazzaTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

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
    HttpModule,
    TranslateModule.forRoot({
       loader: {
          provide: TranslateLoader,
          useFactory: (musesPiazzaTranslateLoader),
          deps: [Http]
            }
    }),
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
