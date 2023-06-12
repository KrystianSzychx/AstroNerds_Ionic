import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteHoroscopePage } from './delete-horoscope.page';

describe('DeleteHoroscopePage', () => {
  let component: DeleteHoroscopePage;
  let fixture: ComponentFixture<DeleteHoroscopePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteHoroscopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
