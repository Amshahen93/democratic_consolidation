import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: Subject <string> = new Subject <string> ();
  constructor() { }

  setLanguage(language: string) {
    this.language.next(language);
  }

}
