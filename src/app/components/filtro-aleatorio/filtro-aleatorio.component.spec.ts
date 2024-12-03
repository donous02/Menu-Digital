import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAleatorioComponent } from './filtro-aleatorio.component';

describe('FiltroAleatorioComponent', () => {
  let component: FiltroAleatorioComponent;
  let fixture: ComponentFixture<FiltroAleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroAleatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroAleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
