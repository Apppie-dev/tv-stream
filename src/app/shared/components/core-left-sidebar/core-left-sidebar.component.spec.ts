import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLeftSidebarComponent } from './core-left-sidebar.component';

describe('CoreLeftSidebarComponent', () => {
  let component: CoreLeftSidebarComponent;
  let fixture: ComponentFixture<CoreLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreLeftSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
