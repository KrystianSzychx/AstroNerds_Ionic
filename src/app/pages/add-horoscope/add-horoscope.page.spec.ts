import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHoroscopePage } from './add-horoscope.page';

describe('AddHoroscopePage', () => {
  let component: AddHoroscopePage;
  let fixture: ComponentFixture<AddHoroscopePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddHoroscopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
