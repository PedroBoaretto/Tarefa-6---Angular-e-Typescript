import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceDeSeguroComponent } from './apolice-de-seguro.component';

describe('ApoliceDeSeguroComponent', () => {
  let component: ApoliceDeSeguroComponent;
  let fixture: ComponentFixture<ApoliceDeSeguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApoliceDeSeguroComponent]
    });
    fixture = TestBed.createComponent(ApoliceDeSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
