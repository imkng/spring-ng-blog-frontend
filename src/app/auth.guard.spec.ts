import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGaurdService } from './auth-gaurd-service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurdService]
    });
  });

  it('should ...', inject([AuthGaurdService], (guard: AuthGaurdService) => {
    expect(guard).toBeTruthy();
  }));
});