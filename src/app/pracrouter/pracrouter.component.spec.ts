import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracrouterComponent } from './pracrouter.component';

describe('PracrouterComponent', () => {
  let component: PracrouterComponent;
  let fixture: ComponentFixture<PracrouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracrouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
