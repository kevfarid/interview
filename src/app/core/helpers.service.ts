import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  generateId() {
    const id = `${Math.random() * 10000}${new Date()
      .getTime()
      .toLocaleString()}`;
    return id.replace('.', '').replace(',', '');
  }
}
