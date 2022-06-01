import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { saveUserReducer } from './shared/store/auth.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    StoreModule.forRoot({ login: saveUserReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
