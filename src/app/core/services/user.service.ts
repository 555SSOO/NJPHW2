import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { User } from '../models/user.model'
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';


@Injectable({
  providedIn: CoreModule
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService, 
    private jwtService: JwtService) { }

  attemptAuth(credentials): Observable<User> {
    return this.apiService.demo('/users/login', {user: credentials})
      .pipe(map(
      data => {
        console.log(data);
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  setAuth(user: User) {
    console.log(user)
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }
}
