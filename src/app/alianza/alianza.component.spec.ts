/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlianzaComponent } from './alianza.component';

describe('AlianzaComponent', () => {
  let component: AlianzaComponent;
  let fixture: ComponentFixture<AlianzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlianzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
