import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  navigateTo(url: string) {
    window.location.href = url;
  }

  redirectToIdp(urlWithoutChallenge: string, verifier: string, challenge: string) {
   
        window.sessionStorage.setItem('PKCE_verifier_trans_auth', verifier);
        window.location.href = `${urlWithoutChallenge}&code_challenge=${challenge}`;
     
  }
}
