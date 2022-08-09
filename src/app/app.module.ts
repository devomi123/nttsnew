import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule} from '@angular/material/card'
import { ReactiveFormsModule } from '@angular/forms';
 import { MatButtonModule } from '@angular/material/button'
  import { HttpClientModule} from '@angular/common/http'
  import { MatMenuModule } from '@angular/material/menu'
  import { MatSelectModule} from '@angular/material/select';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AboutusComponent } from './component/aboutus/aboutus.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import { TextdotPipe } from './pipes/textdot.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AboutusComponent,
    TextdotPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
