import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HalfService {

  constructor() { }

  // (method) HalfService.getHalf(myNum: number): number
  
  getHalf(myNum:number):number{
    return myNum/2;
  }
}
