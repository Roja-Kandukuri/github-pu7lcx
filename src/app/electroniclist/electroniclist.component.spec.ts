import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroniclistComponent } from './electroniclist.component';

describe('ElectroniclistComponent', () => {
  let component: ElectroniclistComponent;
  let fixture: ComponentFixture<ElectroniclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectroniclistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroniclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
