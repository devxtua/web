import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }  from './components/page_main/main.component';
// import { PortfolioComponent }  from './components/page_portfolio/portfolio.component';
import { ServicesComponent }  from './components/page_services/services.component';

import { TechsComponent } from './components/page_techs/techs.component';
// import { AboutComponent } from './components/page_about/about.component';
import { ContactsComponent } from './components/page_contacts/contacts.component';
// import { XtComponent } from './components/projects/xt/xt.component';
// import { LitelifeComponent } from './components/projects/litelife/litelife.component';
// import { PizzeriaComponent } from './components/projects/pizzeria_da_persio/pizzeria_da_persio.component';
// import { BinoComponent } from './components/projects/bino/bino.component';
// import { BarbatorComponent } from './components/projects/barbator/barbator.component';
import { RedirectComponent } from './components/page_redirect/redirect.component';
import { BusinessComponent } from './components/page_business/business.component';
import { ProductComponent } from './components/page_product/product.component';
import { WebsiteComponent }  from './components/page_website/website.component';
import { Website_cardComponent } from './components/page_website_card/website_card.component';
import { Website_catalogComponent } from './components/page_website_catalog/website_catalog.component';
import { Website_storeComponent } from './components/page_website_store/website_store.component';

import { ProfitabilityComponent } from './components/page_profitability/profitability.component';
import { AccountingSystemsComponent } from './components/page_accounting_systems/accounting_systems.component';
import { InstallationComponent } from './components/page_installation/installation.component';
import { СustomizationComponent } from './components/page_customization/customization.component';
import { UpdateComponent } from './components/page_update/update.component';
import { SiteImprovementsComponent } from './components/page_site_improvements/site_improvements.component';
import { CRMsystemsComponent } from './components/page_crm_systems/crm_systems.component';
import { SimpleSoftwareComponent } from './components/page_simple_software/simple_software.component';
import { C1CComponent } from './components/page_1c/1c.component';
import { DatabaseComponent } from './components/page_database/database.component';
import { IP_telephonyComponent } from './components/page_ip_telephony/ip_telephony.component';
import { Chat_botsComponent } from './components/page_chat_bots/chat_bots.component';
import { NotFoundComponent } from './components/page_404/page404.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  // {path: 'portfolio', component: PortfolioComponent},
  {path: 'services', component: ServicesComponent},
  
  {path: 'techs', component: TechsComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  // {path: 'portfolio/xt', component: XtComponent},
  // {path: 'portfolio/litelife', component: LitelifeComponent},
  // {path: 'portfolio/pizzeria_da_persio', component: PizzeriaComponent},
  // {path: 'portfolio/barbator', component: BarbatorComponent},
  // {path: 'portfolio/bino', component: BinoComponent},
  { path: 'redirect', component: RedirectComponent },

  { path: 'business', component: BusinessComponent },
  { path: 'product', component: ProductComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'website_card', component: Website_cardComponent },
  { path: 'website_catalog', component: Website_catalogComponent },
  { path: 'website_store', component: Website_storeComponent },

  { path: 'profitability', component: ProfitabilityComponent },
  { path: 'accounting_systems', component: AccountingSystemsComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'customization', component: СustomizationComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'site_improvements', component: SiteImprovementsComponent },
  { path: 'crm_systems', component: CRMsystemsComponent },
  { path: 'simple_software', component: SimpleSoftwareComponent },
  { path: '1c', component: C1CComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'ip_telephony', component: IP_telephonyComponent },
  { path: 'chat_bots', component: Chat_botsComponent },
  // NotFoundComponent 404
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);