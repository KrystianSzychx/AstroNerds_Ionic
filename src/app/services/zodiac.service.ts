import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ZodiacDescriptionDto } from 'src/app/models/zodiac-description.dto';

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {

  constructor(private http: HttpClient) { }

  getZodiacs(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/zodiacs`);
  }

   getZodiacWithDescription(zodiacName: string): Observable<ZodiacDescriptionDto> {
    return this.http.get<ZodiacDescriptionDto>(
        `${environment.baseUrl}/zodiacs/description?zodiacName=${zodiacName}`
    );
 } 

 getZodiacByDateOfBirth(dateOfBirth: string): Observable<any> {
  return this.http.get(`${environment.baseUrl}/zodiacs/dateOfBirth?dateOfBirth=${dateOfBirth}`)
 }

 downloadDailyHoroscope(zodiacName: string): Observable<Blob> {
  return this.http.get(`${environment.baseUrl}/horoscopefile/${zodiacName}.pdf`, { responseType: 'blob' });
 }

 getImageForZodiac(zodiacName: string): Observable<any> {
  
  return this.http.get(`${environment.baseUrl}/zodiacs/images?zodiacName?zodiacName=${zodiacName}`);
 }

 addDailyHoroscope(dateRange: string, currentDate: string, description: string, compatibility: string, mood: string,
  luckyNumber: number, zodiacName: string): Observable<any> {
const formData = {
date_range: dateRange,
current_date: currentDate,
description: description,
compatibility: compatibility,
mood: mood,
lucky_Number: luckyNumber,
zodiacName: zodiacName
};

return this.http.post(`${environment.baseUrl}/horoscope`, formData);
}

deleteDailyHoroscope(currentDate: string, zodiacName: string, description: string): Observable<any> {
  const queryParams = {
    current_date: currentDate,
    zodiacName: zodiacName,
    description: description
  };

  const options = {
    params: queryParams
  };

  return this.http.delete(`${environment.baseUrl}/horoscope`, options);
}
}