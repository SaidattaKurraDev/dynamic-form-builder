import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  constructor(private http : HttpClient) { }


  /**
   * 
   * @param email 
   * @param password 
   * @returns 
   */
  login(email:string,password:string):Observable<User[]>{
    return this.http.get<any[]>(`${this.apiUrl}/users?email=${email}&password=${password}`).pipe(
      tap(users => {
        console.log(users);
      })
    );
    // since we are using a json server library we are using query request to check if user exsist or not 
  }
  /**
   * 
   * @param user 
   */
  setUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  /**
   * 
   * @returns 
   */
  getUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }
   /**
    * 
    * @returns 
    */
  getRole(): 'admin' | 'user' | null {
    const user = this.getUser();
    return user?.role || null;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

}
