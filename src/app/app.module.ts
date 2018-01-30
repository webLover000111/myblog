import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonInoComponent } from './person-ino/person-ino.component';
import { SearchComponent } from './search/search.component';
import { SortfilesComponent } from './sortfiles/sortfiles.component';
import { FooterComponent } from './footer/footer.component';
import { PassagesItemComponent } from './passages-item/passages-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonInoComponent,
    SearchComponent,
    SortfilesComponent,
    FooterComponent,
    PassagesItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
