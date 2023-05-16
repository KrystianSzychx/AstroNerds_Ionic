import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZodiacDetailsByDatePage } from './zodiac-details-by-date.page';

describe('ZodiacDetailsByDatePage', () => {
  let component: ZodiacDetailsByDatePage;
  let fixture: ComponentFixture<ZodiacDetailsByDatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZodiacDetailsByDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
