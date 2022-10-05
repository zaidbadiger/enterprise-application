import { TestBed } from '@angular/core/testing';

import { PaymentInfoService } from './payment-info.service';
import { ReactiveFormsModule } from '@angular/forms'

describe('PaymentInfoService', () => {
  let service: PaymentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentInfoService);
    TestBed.configureTestingModule({
      declarations: [PaymentInfoService],
      imports: [ReactiveFormsModule],
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
