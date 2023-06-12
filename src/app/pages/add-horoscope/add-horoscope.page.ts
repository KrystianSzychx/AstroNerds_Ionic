import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZodiacService } from 'src/app/services/zodiac.service';

@Component({
  selector: 'app-add-horoscope',
  templateUrl: './add-horoscope.page.html',
  styleUrls: ['./add-horoscope.page.scss'],
})
export class AddHoroscopePage implements OnInit {
  dateRange!: string;
  currentDate!: string;
  description!: string;
  compatibility!: string;
  mood!: string;
  luckyNumber!: number;
  zodiacName!: string;

  constructor(private http: HttpClient, private zodiacService: ZodiacService) { }

  ngOnInit(): void {
    // Inicjalizacja danych
  }

  submitForm() {
    // Utwórz obiekt z danymi do wysłania na serwer
    const formData = {
      date_range: this.dateRange,
      current_date: this.currentDate,
      description: this.description,
      compatibility: this.compatibility,
      mood: this.mood,
      lucky_Number: this.luckyNumber,
      zodiacName: this.zodiacName
    };

// Wywołaj funkcję addDailyHoroscope z usługi ZodiacService
this.zodiacService.addDailyHoroscope(formData.date_range, formData.current_date, formData.description,
  formData.compatibility, formData.mood, formData.lucky_Number, formData.zodiacName)
  .subscribe({
    next: (res) => {
      // Obsługa udanej odpowiedzi
      console.log('Horoscope added successfully!');
      // Dodaj dodatkową logikę po dodaniu horoskopu, jeśli to konieczne
    }
  });
  }}

