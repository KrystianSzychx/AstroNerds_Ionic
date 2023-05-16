import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZodiacsPage } from './zodiacs.page';

describe('ZodiacsPage', () => {
  let component: ZodiacsPage;
  let fixture: ComponentFixture<ZodiacsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZodiacsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

