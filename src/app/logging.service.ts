import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logger(message: string) {
    const timestamp = new Date().toLocaleDateString();
    console.log(`[${timestamp}] : ${message}`);
  }
}
