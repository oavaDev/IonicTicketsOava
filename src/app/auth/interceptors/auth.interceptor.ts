import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../auth.service";
import {from, Observable, switchMap} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Use switchMap to handle the asynchronous operation of getting the token
    return from(this.authService.getToken()).pipe(
      switchMap((token) => {
        if (token) {
          // Clone the request and add the Authorization header with the token
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

        // Continue with the modified or original request
        return next.handle(request);
      })
    );
  }
}
