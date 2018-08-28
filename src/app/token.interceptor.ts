import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercept request : ', request );
        console.log('Intercept next : ', next);
        request = request.clone({
          setHeaders: {
            // Authorization: `Bearer ${this.auth.getToken()}`
            test:'hehehe',
            
          }
        });

        return next.handle(request);
      }
}