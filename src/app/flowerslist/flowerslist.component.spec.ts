import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerslistComponent } from './flowerslist.component';

describe('FlowerslistComponent', () => {
  let component: FlowerslistComponent;
  let fixture: ComponentFixture<FlowerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
