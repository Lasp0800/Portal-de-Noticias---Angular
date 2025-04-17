import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasListaComponent } from './noticias-lista.component';

describe('NoticiasListaComponent', () => {
  let component: NoticiasListaComponent;
  let fixture: ComponentFixture<NoticiasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
