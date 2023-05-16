import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ZodiacService } from 'src/app/services/zodiac.service';
import { Subscription, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zodiacs',
  templateUrl: './zodiacs.page.html',
  styleUrls: ['./zodiacs.page.scss'],
})
export class ZodiacsPage implements OnInit {
  zodiacs: {zodiacName: string}[] = [];
  zodiacsSubscription!: Subscription;
  
 

  constructor(private zodiacService: ZodiacService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadZodiacs();
  }

  async loadZodiacs() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.zodiacsSubscription = this.zodiacService.getZodiacs().subscribe({
      next: (res) => {
        loading.dismiss();
        this.zodiacs = res;
        console.log(this.zodiacs);
      },
      error: (err) => {
        loading.dismiss();
        console.error(err);
      },
    });
  }

  // getAvatarForZodiac(zodiacName: string) {
  //   return this.zodiacService.getImageForZodiac(zodiacName).pipe(
  //     map((image: Blob | MediaSource) => URL.createObjectURL(image))
  //   );
  }
