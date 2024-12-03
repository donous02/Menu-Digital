import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPorLetraComponent } from './filtro-por-letra.component';

describe('FiltroPorLetraComponent', () => {
  let component: FiltroPorLetraComponent;
  let fixture: ComponentFixture<FiltroPorLetraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroPorLetraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroPorLetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
