import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privilegedGuard } from './privileged.guard';

describe('privilegedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privilegedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
