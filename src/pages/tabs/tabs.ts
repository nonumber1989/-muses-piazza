import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';
import { DiscoverPage } from '../discover/discover';
import { NotificationPage } from '../notification/notification';
import { ContactPage } from '../contact/contact';
import { NavigationPage } from '../navigation/navigation';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  HomeRoot: any = HomePage;
  MenuRoot: any = MenuPage;
  DiscoverRoot:any = DiscoverPage;
  ContactRoot: any = ContactPage;
  NotificationRoot: any = NotificationPage;
  NavigationRoot:any = NavigationPage;
  constructor() {

  }
}
