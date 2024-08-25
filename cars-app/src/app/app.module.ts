import { BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReaktiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    ReaktiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
