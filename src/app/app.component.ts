import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Portal',
      url: '/portal',
      icon: 'grid'
    },
    {
      title: 'Player',
      url: '/player',
      icon: 'musical-notes'
    },
    {
      title: 'Alacak Ekrani',
      url: '/HesapEkrani',
      icon: 'list'
    },
    {
      title: 'Verecek Ekrani',
      url: '/Borcekrani',
      icon: 'list'
    },
    {
      title: 'Durum Ekrani',
      url: '/durum-ekrani',
      icon: 'list'
    },
    {
      title: 'Ürün Ekrani',
      url: '/product',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
