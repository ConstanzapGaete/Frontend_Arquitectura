import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JardineriaPage } from './jardineria.page';

describe('JardineriaPage', () => {
  let component: JardineriaPage;
  let fixture: ComponentFixture<JardineriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JardineriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
