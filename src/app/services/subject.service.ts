import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  //  Enviar mensajes entre componentes
  subject = new Subject<any>();

  public sendMessages(product: Product): void {
    this.subject.next({product: product});
  }

  public getMessage(): Observable<any>{
    return this.subject.asObservable();
  }


  constructor() { }





}
