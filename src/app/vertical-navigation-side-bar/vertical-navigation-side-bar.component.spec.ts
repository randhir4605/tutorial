import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavigationSideBarComponent } from './vertical-navigation-side-bar.component';

describe('VerticalNavigationSideBarComponent', () => {
  let component: VerticalNavigationSideBarComponent;
  let fixture: ComponentFixture<VerticalNavigationSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalNavigationSideBarComponent]
    });
    fixture = TestBed.createComponent(VerticalNavigationSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
