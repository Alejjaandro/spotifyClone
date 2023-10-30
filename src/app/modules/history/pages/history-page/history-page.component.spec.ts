import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageComponent } from './history-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HistoryPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
});
    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
