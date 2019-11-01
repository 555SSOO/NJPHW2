import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';


@Injectable({
  providedIn: CoreModule
})
export class JwtService {

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
