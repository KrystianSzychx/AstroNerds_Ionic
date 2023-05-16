import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZodiacDescriptionDto } from 'src/app/models/zodiac-description.dto';
import { ZodiacService } from 'src/app/services/zodiac.service';

@Component({
  selector: 'app-zodiacs-details',
  templateUrl: './zodiacs-details.page.html',
  styleUrls: ['./zodiacs-details.page.scss'],
})
export class ZodiacsDetailsPage implements OnInit {
  zodiacName!: string;
  zodiacObj!: ZodiacDescriptionDto;

  constructor(private route: ActivatedRoute, private zodiacService: ZodiacService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.zodiacName = params['zodiacName'];
2
      if (this.zodiacName) {
        this.zodiacService.getZodiacWithDescription(this.zodiacName).subscribe((res) => {
          this.zodiacObj = res;
          console.log(this.zodiacObj.description);
          console.log(res['zodiacName']);
        });
      }
    });
  }
}