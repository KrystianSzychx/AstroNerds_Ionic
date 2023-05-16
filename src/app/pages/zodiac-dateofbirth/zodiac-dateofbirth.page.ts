import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZodiacService } from 'src/app/services/zodiac.service';

@Component({
  selector: 'app-zodiac-dateofbirth',
  templateUrl: './zodiac-dateofbirth.page.html',
  styleUrls: ['./zodiac-dateofbirth.page.scss'],
})
export class ZodiacDateofbirthPage implements OnInit {
  dateOfBirth: string = '';
  selectedDate: string = '';
  errorMsg: string;

  constructor(private zodiacService: ZodiacService, private router: Router) { 
    this.errorMsg = '';
  }
  
  ngOnInit() {
    
  }

  checkZodiacSign() {
    this.errorMsg = '';
    this.zodiacService.getZodiacByDateOfBirth(this.dateOfBirth).subscribe({
      next: (res) => {
        console.log(res);
        const queryParams = {
          zodiacName: res.zodiacName,
          date_start: res.date_start,
          date_end: res.date_end,
          description: res.description
        };
        this.router.navigate(['/zodiac-details-by-date'], {queryParams});
      },
      error: (error) => {
        console.error(error);
        if(error.status === 404) {
          console.log('Brak danych')
        }        
      }
    });
  }

  onDateOfBirthChange(event: any ) {
    const date = new Date(event.detail.value);  
    this.dateOfBirth = date.toISOString().substring(0,10);  
  }
}