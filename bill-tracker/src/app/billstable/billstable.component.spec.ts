import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillstableComponent } from './billstable.component';

describe('BillstableComponent', () => {
  let component: BillstableComponent;
  let fixture: ComponentFixture<BillstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
