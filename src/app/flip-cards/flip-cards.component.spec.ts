import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardsComponent } from './flip-cards.component';

describe('FlipCardsComponent', () => {
  let component: FlipCardsComponent;
  let fixture: ComponentFixture<FlipCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
