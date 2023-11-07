import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLocalStorageService {

  public storageSub$: BehaviorSubject<string> = new BehaviorSubject('')

  watchStorage(): Observable<string> {
    return this.storageSub$.asObservable()
  }

  setItem(key: string, data: any): void {
    localStorage.setItem(key, data)
    this.storageSub$.next('changed')
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    this.storageSub$.next('changed')
  }
}
