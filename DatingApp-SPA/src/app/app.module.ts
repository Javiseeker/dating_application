// angular-cli imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// primeng imports
import { ButtonModule } from 'primeng/button';

// custom apps imports
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';

// services imports
import { ValueService } from './value/value.service';

@NgModule({
  declarations: [
    AppComponent,
      ValueComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,

  ],
  providers: [
    ValueService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
