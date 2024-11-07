import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenPage } from './authen.page';

describe('AuthenPage', () => {
  let component: AuthenPage;
  let fixture: ComponentFixture<AuthenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
