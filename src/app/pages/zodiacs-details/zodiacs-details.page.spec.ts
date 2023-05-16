import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZodiacsDetailsPage } from './zodiacs-details.page';

describe('ZodiacsDetailsPage', () => {
  let component: ZodiacsDetailsPage;
  let fixture: ComponentFixture<ZodiacsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZodiacsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
