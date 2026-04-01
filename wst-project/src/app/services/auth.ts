import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isBrowser = typeof window !== 'undefined';

  saveUser(userData: any) {
    if (this.isBrowser) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
    }
  }

  getUser() {
    if (this.isBrowser) {
      const data = localStorage.getItem('currentUser');
      return data ? JSON.parse(data) : null;
    }
    return null;
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('currentUser');
    }
  }
}