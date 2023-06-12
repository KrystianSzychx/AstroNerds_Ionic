import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ZodiacService } from 'src/app/services/zodiac.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-zodiacs',
  templateUrl: './zodiacs.page.html',
  styleUrls: ['./zodiacs.page.scss'],
})
export class ZodiacsPage implements OnInit {
  zodiacs: { zodiacName: string }[] = [];
  zodiacsSubscription!: Subscription;

  constructor(
    private zodiacService: ZodiacService,
    private loadingCtrl: LoadingController
  ) {}

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
}
