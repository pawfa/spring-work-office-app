import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPreviewComponent } from './offer-preview-list.component';

describe('OffersPreviewComponent', () => {
  let component: OffersPreviewComponent;
  let fixture: ComponentFixture<OffersPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
