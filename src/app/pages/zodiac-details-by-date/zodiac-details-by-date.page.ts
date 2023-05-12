import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZodiacService } from 'src/app/services/zodiac.service';

@Component({
  selector: 'app-zodiac-details-by-date',
  templateUrl: './zodiac-details-by-date.page.html',
  styleUrls: ['./zodiac-details-by-date.page.scss'],
})
export class ZodiacDetailsByDatePage implements OnInit {
zodiacName!: string;
date_start!: string;
date_end!: string;
description!: string;
  http: any;

  constructor(private zodiacService: ZodiacService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.zodiacName = params['zodiacName'];
      this.date_start = params['date_start'];
      this.date_end = params['date_end'];
      this.description = params['description']
    })
  }

  downloadHoroscope() {
    this.zodiacService.downloadDailyHoroscope(this.zodiacName).subscribe({
      next: (res) => { 
        console.log(res);
        const file = new Blob([res], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      },  
      error: (error) => {
        console.error(error);
      }
    });
  }
}