import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonInoComponent } from './person-ino/person-ino.component';
import { SearchComponent } from './search/search.component';
import { SortfilesComponent } from './sortfiles/sortfiles.component';
import { FooterComponent } from './footer/footer.component';
import { PassagesItemComponent } from './passages-item/passages-item.component';
import { PassageComponent } from './passages-item/passage.component';
import { PassExample } from './testmodule/passage.model';
import {Routes} from '@angular/router';


export const examples: PassExample[]=[
  { id: "1", title: "haha", numbers: 1, shortInfo: "haha", tags: ['JS','HTML5'], timeId: "11", passTime: "2018-01-01"},
  { id: "2", title: "haha2", numbers: 2, shortInfo: "haha2", tags: ['JS','HTML5'], timeId: "22", passTime: "2018-01-01" },
  { id: "3", title: "haha3", numbers: 3, shortInfo: "haha3", tags: ['JS','HTML5'], timeId: "33", passTime: "2018-01-01" },
  ];
export const hotPassages: PassExample[]=[
  { id: "4", title: "haha", numbers: 1, shortInfo: "haha", tags: ['JS','HTML5'], timeId: "55", passTime: "2018-01-01" },
  { id: "5", title: "haha2", numbers: 2, shortInfo: "haha2", tags: ['JS','HTML5'], timeId: "66", passTime: "2018-01-01"},
  { id: "6", title: "haha3", numbers: 3, shortInfo: "haha3" ,tags: ['JS','HTML5'], timeId: "77", passTime: "2018-01-01"},
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonInoComponent,
    SearchComponent,
    SortfilesComponent,
    FooterComponent,
    PassagesItemComponent,
    PassageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'PassExamples',    useValue: examples },
    { provide: 'PassExamples',    useValue: hotPassages }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
