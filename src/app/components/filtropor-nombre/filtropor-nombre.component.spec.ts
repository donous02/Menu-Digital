import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroporNombreComponent } from './filtropor-nombre.component';

describe('FiltroporNombreComponent', () => {
  let component: FiltroporNombreComponent;
  let fixture: ComponentFixture<FiltroporNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroporNombreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroporNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
