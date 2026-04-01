import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalArchive } from './digital-archive';

describe('DigitalArchive', () => {
  let component: DigitalArchive;
  let fixture: ComponentFixture<DigitalArchive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalArchive],
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalArchive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
