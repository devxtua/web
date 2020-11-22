import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { routing } from './app.routing';

import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainComponent } from './components/page_main/main.component';
import { PortfolioComponent } from './components/page_portfolio/portfolio.component';
import { TechsComponent } from './components/page_techs/techs.component';
import { AboutComponent } from './components/page_about/about.component';
import { ContactsComponent } from './components/page_contacts/contacts.component';
import { ServicesComponent } from './components/page_services/services.component';
import { WebsiteComponent } from './components/page_website/website.component';
import { BannerComponent } from './components/owl_banner/banner.component';
import { OwlTechsComponent } from './components/owl_techs/owl_techs.component';
import { MapComponent } from './components/map/map.component';
import { SubscribeFormComponent } from './components/form_subscribe/subscribe.component';
// import { XtComponent } from './components/projects/xt/xt.component';
// import { LitelifeComponent } from './components/projects/litelife/litelife.component';
// import { PizzeriaComponent } from './components/projects/pizzeria_da_persio/pizzeria_da_persio.component';
// import { BinoComponent } from './components/projects/bino/bino.component';
// import { BarbatorComponent } from './components/projects/barbator/barbator.component';
import { RedirectComponent } from './components/page_redirect/redirect.component';
import { BusinessComponent } from './components/page_business/business.component';
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



enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		routing
	],
	declarations: [
		PageComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent,
		PortfolioComponent,
		ServicesComponent,
		WebsiteComponent,
		BannerComponent,
		TechsComponent,
		AboutComponent,
		ContactsComponent,
		OwlTechsComponent,
		MapComponent,
		SubscribeFormComponent,
		// XtComponent,
		// LitelifeComponent,
		// PizzeriaComponent,
		// BarbatorComponent,
		// BinoComponent,
		RedirectComponent,
		BusinessComponent,
		ProfitabilityComponent,
		AccountingSystemsComponent,
		InstallationComponent,
		СustomizationComponent,
		UpdateComponent,
		SiteImprovementsComponent,
		CRMsystemsComponent,
		SimpleSoftwareComponent,
		C1CComponent,
		DatabaseComponent,
		IP_telephonyComponent,
		Chat_botsComponent,
		NotFoundComponent

	],
	bootstrap: [
		PageComponent
	]
})
export class PageModule { }
