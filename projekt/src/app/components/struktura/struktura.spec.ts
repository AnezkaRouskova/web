import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Struktura } from './struktura';

describe('Struktura', () => {
  let component: Struktura;
  let fixture: ComponentFixture<Struktura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Struktura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Struktura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
