import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZodiacDateofbirthPage } from './zodiac-dateofbirth.page';

describe('ZodiacDateofbirthPage', () => {
  let component: ZodiacDateofbirthPage;
  let fixture: ComponentFixture<ZodiacDateofbirthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZodiacDateofbirthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
