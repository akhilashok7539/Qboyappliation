import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './_services/user.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/Inbox',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profiledetails',
      icon: 'person'
    },
    {
      title: 'cart',
      url: 'cart',
      icon: 'cart'
    },
    {
      title: 'My Orders',
      url: 'my-orders',
      icon: 'fast-food'
    },
   
    {
      title: 'Address Book',
      url: 'address-book',
      icon: 'book'
    },
    {
      title: 'Share',
      url: '/folder/Spam',
      icon: 'share-social'
    },
    {
      title: 'Customer Care',
      url: '/folder/Inbox',
      icon: 'call'
    },
    // {
    //   title: 'Notification',
    //   url: '/folder/Spam',
    //   icon: 'notifications'
    // },
    {
      title: 'Sign Out',
      url: '/login',
      icon: 'power'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  userdetails;
  userName; 
  name;
  isloggedIn= false;
  constructor(
    private platform: Platform,private usrsrvice:UserService,private fcm: FCM,
    private splashScreen: SplashScreen,private router:Router,private callnumber:CallNumber,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.ionViewWillEnter();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#1E456C');
      this.splashScreen.hide();
      this.fcm.getToken().then(token => {
        console.log(token);
        localStorage.setItem("firbaseToken",token);
      });

      // ionic push notification example
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
       
        if (data) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });      
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.avilablepoints();
    this.isloggedIn = JSON.parse(localStorage.getItem("isloggedin"));
    console.log(this.isloggedIn);
    if(this.isloggedIn == null)
    {
      this.isloggedIn == false;
    }

    if(this.isloggedIn == true)
    {
      this.router.navigate(['/folder/Inbox']);
      this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
      this.userName = this.userdetails["email"];  
      this.name = this.userdetails["name"];
    }
    else if(this.isloggedIn == false)
    {
      this.router.navigate(['/login']);

    }
    
  }
  ionViewWillEnter() {
    this.isloggedIn = JSON.parse(localStorage.getItem("isloggedin"));
    console.log(this.isloggedIn);
    if(this.isloggedIn == null)
    {
      this.isloggedIn == false;
    }

    if(this.isloggedIn == true)
    {
      this.router.navigate(['/folder/Inbox']);
      this.userdetails = JSON.parse(localStorage.getItem("currentUserDetails"));
      this.userName = this.userdetails["email"];  
      this.name = this.userdetails["name"];
      console.log(this.userName);
      
    }
    else if(this.isloggedIn == false)
    {
      this.router.navigate(['/login']);

    }
    
  }
  avilablepoints(){
    // this.usrsrvice.getpoints().subscribe(
    //   data =>{
        
    //   },error =>{

    //   }
    // )
  }
  logout(p)
  {
    console.log(p.title);
    if(p.title =='Sign Out')
    {
      console.log("LOGOUT SUCCSSFULLY");
      localStorage.clear();
     
      this.router.navigate(['/login']);
      // window.location.reload();
      
    }
    else if(p.title =='Customer Care')
    {
      let number = "7025538888";
      this.callnumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
    else{
      console.log("Perfome other operations \t" +p.title);

    }
  }
}
