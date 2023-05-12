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
}
