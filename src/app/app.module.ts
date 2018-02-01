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
import { NavRoute } from './testmodule/route.model';

import {RouterModule, Routes} from '@angular/router';
import {WholePassageComponent } from './whole-passage/whole-passage.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { OthersComponent } from './others/others.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { PassageListComponent } from './passage-list/passage-list.component';
import {PassageList} from './testmodule/passageList.model';
// import {
//   routes as childRoutes,
//   WholePassageModule
// } from './whole-passage/whole-passage.module';

export const examples: PassExample[] = [
  { id: "1", title: "haha", numbers: 1, shortInfo: "haha", tags: ['JS','HTML5'], timeId: "11", passTime: "2018-01-01"},
  { id: "2", title: "haha2", numbers: 2, shortInfo: "haha2", tags: ['JS','HTML5'], timeId: "22", passTime: "2018-01-01" },
  { id: "3", title: "haha3", numbers: 3, shortInfo: "haha3", tags: ['JS','HTML5'], timeId: "33", passTime: "2018-01-01" },
  ];
export const hotPassages: PassExample[] = [
  { id: "4", title: "haha", numbers: 1, shortInfo: "haha", tags: ['JS','HTML5'], timeId: "55", passTime: "2018-01-01" },
  { id: "5", title: "haha2", numbers: 2, shortInfo: "haha2", tags: ['JS','HTML5'], timeId: "66", passTime: "2018-01-01"},
  { id: "6", title: "haha3", numbers: 3, shortInfo: "haha3" ,tags: ['JS','HTML5'], timeId: "77", passTime: "2018-01-01"},
];
export const othersPassages: PassageList[] = [
  {id: "4", title: 'Linux从入门到精通',numbers: 3, passTime: '2018-01-01'},
  {id: "4", title: 'Linux从入门到精通1',numbers: 4, passTime: '2018-01-02'},
  {id: "4", title: 'Linux从入门到精通2',numbers: 30, passTime: '2018-01-03'},
  {id: "4", title: 'Linux从入门到精通3',numbers: 300, passTime: '2018-01-04'},
  {id: "4", title: 'Linux从入门到精通4',numbers: 3000, passTime: '2018-01-05'}
];
export const frontendPassages: PassageList[] = [
  { id: "6", title: 'CSS从入门到精通',numbers: 3, passTime: '2018-01-01'},
  { id: "6", title: 'CSS从入门到精通1',numbers: 4, passTime: '2018-01-02'},
  { id: "6", title: 'CSS从入门到精通2',numbers: 30, passTime: '2018-01-03'},
  { id: "6", title: 'CSS从入门到精通3',numbers: 300, passTime: '2018-01-04'},
  { id: "6", title: 'CSS从入门到精通4',numbers: 3000, passTime: '2018-01-05'}
];
export const backendPassages: PassageList[] = [
  {id: "6", title: 'node从入门到精通',numbers: 3, passTime: '2018-01-01'},
  {id: "6", title: 'node从入门到精通1',numbers: 4, passTime: '2018-01-02'},
  {id: "6", title: 'node从入门到精通2',numbers: 30, passTime: '2018-01-03'},
  {id: "6", title: 'node从入门到精通3',numbers: 300, passTime: '2018-01-04'},
  {id: "6", title: 'node从入门到精通4',numbers: 3000, passTime: '2018-01-05'}
];

export const navLinks: NavRoute[] = [
  {label: '首页', name: 'Root', path: '', component: MainPageComponent},
  {label: 'Frontend文章', name: 'Frontend', path: 'frontend', component: FrontendComponent},
  {label: 'Backend文章', name: 'Backend', path: 'backend', component: BackendComponent},
  {label: '杂谈文章', name: 'Others', path: 'others', component: OthersComponent},
];


const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'frontend', component: FrontendComponent, pathMatch: 'full' },
  { path: 'backend', component: BackendComponent, pathMatch: 'full' },
  { path: 'others', component: OthersComponent, pathMatch: 'full' },
  { path: 'passages', redirectTo: '', pathMatch: 'full'},
  {
    path: 'passages/:id',
    component: WholePassageComponent
  },
  {
    path: 'frontend/passages/:id',
    component: WholePassageComponent
  },
  {
    path: 'backend/passages/:id',
    component: WholePassageComponent
  },
  {
    path: 'others/passages/:id',
    component: WholePassageComponent
  }
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
    WholePassageComponent,
    PassageComponent,
    MainPageComponent,
    FrontendComponent,
    BackendComponent,
    OthersComponent,
    PassageListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [
    { provide: 'PassExamples',    useValue: examples },
    { provide: 'PassExamples',    useValue: hotPassages },
    { provide: 'OthersLists',    useValue: othersPassages },
    { provide: 'FrontendLists',    useValue: frontendPassages },
    { provide: 'BackendLists',    useValue: backendPassages },
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: 'NavLinks',    useValue: navLinks },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
