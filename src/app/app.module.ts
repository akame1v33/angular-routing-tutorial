import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { routeComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { TestComponent } from './test/test.component';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor} from './token.interceptor';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    },
    AuthGuard,


    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
