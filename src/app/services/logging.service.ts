import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  lastLog: string;

  constructor() { }

  printLog(message: string): void {
    console.log(message);
    console.log(this.lastLog);
    this.lastLog = message;
  }
}
