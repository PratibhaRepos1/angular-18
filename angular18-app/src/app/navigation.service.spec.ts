import { TestBed } from '@angular/core/testing';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;
  let mockWindow: jasmine.SpyObj<Window>;

  beforeEach(() => {
    mockWindow = jasmine.createSpyObj('Window', ['sessionStorage'], {
      location: { href: '' },
      sessionStorage: {
        setItem: jasmine.createSpy('setItem')
      }
    });

    TestBed.configureTestingModule({
      providers: [{ provide: Window, useValue: mockWindow }]
    });

    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should navigate to the given URL', () => {
  //   const url = 'http://example.com&code_challenge=testChallenge';
  //   service.navigateTo(url);
  //   expect(mockWindow.location.href).toBe(url);
  // });

  it('should redirect to IDP with the correct URL and set the verifier in session storage', () => {
    const urlWithoutChallenge = 'http://example.com';
    const verifier = 'testVerifier';
    const challenge = 'testChallenge';

    service.redirectToIdp(urlWithoutChallenge, verifier, challenge);

    expect(mockWindow.sessionStorage.setItem).toHaveBeenCalledWith(
      'PKCE_verifier_trans_auth',
      verifier
    );
    expect(mockWindow.location.href).toBe(`${urlWithoutChallenge}&code_challenge=${challenge}`);
  });
});
