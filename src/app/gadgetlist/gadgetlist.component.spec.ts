import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetlistComponent } from './gadgetlist.component';

describe('GadgetlistComponent', () => {
  let component: GadgetlistComponent;
  let fixture: ComponentFixture<GadgetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
