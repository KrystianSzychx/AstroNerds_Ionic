import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectActionPage } from './select-action.page';

describe('SelectActionPage', () => {
  let component: SelectActionPage;
  let fixture: ComponentFixture<SelectActionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
