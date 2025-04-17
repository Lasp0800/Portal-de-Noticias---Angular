import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasFiltroComponent } from './noticias-filtro.component';

describe('NoticiasFiltroComponent', () => {
  let component: NoticiasFiltroComponent;
  let fixture: ComponentFixture<NoticiasFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
