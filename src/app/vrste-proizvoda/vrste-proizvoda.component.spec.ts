import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrsteProizvodaComponent } from './vrste-proizvoda.component';

describe('VrsteProizvodaComponent', () => {
  let component: VrsteProizvodaComponent;
  let fixture: ComponentFixture<VrsteProizvodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrsteProizvodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrsteProizvodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
