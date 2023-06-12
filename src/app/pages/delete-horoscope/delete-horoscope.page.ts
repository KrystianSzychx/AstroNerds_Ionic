import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZodiacService } from 'src/app/services/zodiac.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delete-horoscope',
  templateUrl: './delete-horoscope.page.html',
  styleUrls: ['./delete-horoscope.page.scss'],
})
export class DeleteHoroscopePage implements OnInit {
  currentDate!: string;
  description!: string;
  zodiacName!: string;

  constructor(private http: HttpClient, private zodiacService: ZodiacService, private alertController: AlertController) { }

  ngOnInit() {
  }
// TODO: Nie działą usuwanie!

  submitForm() {
    // Utwórz obiekt z danymi do wysłania na serwer
    const formData = {
      current_date: this.currentDate,
      description: this.description,
      zodiacName: this.zodiacName
    };

    this.zodiacService.deleteDailyHoroscope(formData.current_date, formData.description, formData.zodiacName)
    .subscribe({
      next: () => {
        // Usunięcie horoskopu powiodło się
        this.presentSuccessAlert();
      },
      error: (error: any) => {
        // Wystąpił błąd podczas usuwania horoskopu
        this.presentErrorAlert();
      }
    });
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Sukces',
      message: 'Horoskop został pomyślnie usunięty.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Błąd',
      message: 'Wystąpił błąd podczas usuwania horoskopu.',
      buttons: ['OK']
    });

    await alert.present();
  }
}