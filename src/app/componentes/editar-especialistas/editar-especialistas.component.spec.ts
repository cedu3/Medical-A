import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecialistasComponent } from './editar-especialistas.component';

describe('EditarEspecialistasComponent', () => {
  let component: EditarEspecialistasComponent;
  let fixture: ComponentFixture<EditarEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEspecialistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
