import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent }  from './components/page_main/main.component';
import { PortfolioComponent }  from './components/page_portfolio/portfolio.component';
import { ServicesComponent }  from './components/page_services/services.component';
import { WebsiteComponent }  from './components/page_website/website.component';
import { TechsComponent } from './components/page_techs/techs.component';
import { AboutComponent } from './components/page_about/about.component';
import { ContactsComponent } from './components/page_contacts/contacts.component';
import { XtComponent } from './components/projects/xt/xt.component';
import { LitelifeComponent } from './components/projects/litelife/litelife.component';
import { PizzeriaComponent } from './components/projects/pizzeria_da_persio/pizzeria_da_persio.component';
import { BinoComponent } from './components/projects/bino/bino.component';
import { BarbatorComponent } from './components/projects/barbator/barbator.component';
import { RedirectComponent } from './components/page_redirect/redirect.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'website', component: WebsiteComponent},
  {path: 'techs', component: TechsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'portfolio/xt', component: XtComponent},
  {path: 'portfolio/litelife', component: LitelifeComponent},
  {path: 'portfolio/pizzeria_da_persio', component: PizzeriaComponent},
  {path: 'portfolio/barbator', component: BarbatorComponent},
  {path: 'portfolio/bino', component: BinoComponent},
  { path: 'redirect', component: RedirectComponent },
  { path: '**', component: RedirectComponent }
];




export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);