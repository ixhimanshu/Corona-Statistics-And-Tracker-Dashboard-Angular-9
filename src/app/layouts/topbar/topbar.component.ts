import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  isSidebar = false;
  showCountryFlag: boolean;
  userCountry: any;
  userCountryData: any;
  constructor(private route: Router) {
    this.checkCountry();
   }

  deferredPrompt: any;
  showButton = false;
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }
  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
    .then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    this.deferredPrompt = null;
  });
  
}

checkCountry(){
  if(!this.userCountryData){
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=9a6cc34c2f8042faaa3997b8230991d9')
    .then((res:any) => res.json() )
    .then(data => {
      console.log(data);
      if(data.country_code2) {
        this.showCountryFlag = true;
        this.userCountryData = data;
      }
    })
  }
}

getImagePath(){
  return `https://www.countryflags.io/${this.userCountryData.country_code2}/flat/32.png`
}

findRoute() {
  this.isSidebar = !this.isSidebar;
  setTimeout(() => {
    this.route.navigate([`/country/${this.userCountryData.country_name}`]);
  }, 200)
}

navToHome() {
  this.route.navigate([`/`]);

}

}
