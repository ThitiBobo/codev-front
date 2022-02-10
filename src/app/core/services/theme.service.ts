import {Injectable, Input} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {User} from "../models/user";

const LOCAL_STORAGE_KEY = "dark-mode"

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode: boolean = false
  public modeSubject: Subject<string> = new Subject<string>()

  constructor() {
    if (!(localStorage.getItem(LOCAL_STORAGE_KEY) === null)) {
      let value = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (typeof value === "string") {
        this.darkMode = JSON.parse(value) === true
      }
    }
  }


  isDarkMode(): boolean{
    return this.darkMode;
  }

  switchTheme(){
    this.darkMode = !this.darkMode;
    this.darkMode ? this.modeSubject.next('dark') : this.modeSubject.next('light')
    localStorage.setItem(LOCAL_STORAGE_KEY, String(this.darkMode));
  }
}
