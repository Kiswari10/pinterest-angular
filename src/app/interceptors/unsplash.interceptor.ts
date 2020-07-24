import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UnsplashInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const ACCESS_KEY = 'tOoD8N49YdY2HrKYAlMcWLbam4IeRJeD2-VL4TdGUD4';
    const headers = req.clone({
      headers: req.headers.set('Authorization', `Client-ID ${ACCESS_KEY}`)
    });
    return next.handle(headers);
  }
}
