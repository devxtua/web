"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var core_2 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var page_component_1 = require("./components/page/page.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var main_component_1 = require("./components/page_main/main.component");
var portfolio_component_1 = require("./components/page_portfolio/portfolio.component");
var techs_component_1 = require("./components/page_techs/techs.component");
var about_component_1 = require("./components/page_about/about.component");
var contacts_component_1 = require("./components/page_contacts/contacts.component");
var services_component_1 = require("./components/page_services/services.component");
var website_component_1 = require("./components/page_website/website.component");
var banner_component_1 = require("./components/owl_banner/banner.component");
var owl_reviews_component_1 = require("./components/owl_reviews/owl_reviews.component");
var owl_techs_component_1 = require("./components/owl_techs/owl_techs.component");
var map_component_1 = require("./components/map/map.component");
var subscribe_component_1 = require("./components/form_subscribe/subscribe.component");
// import { SimpleFormComp} from './components/form_reviews/reviews.component';
// import { XtComponent } from './components/projects/xt/xt.component';
// import { LitelifeComponent } from './components/projects/litelife/litelife.component';
// import { PizzeriaComponent } from './components/projects/pizzeria_da_persio/pizzeria_da_persio.component';
// import { BinoComponent } from './components/projects/bino/bino.component';
// import { BarbatorComponent } from './components/projects/barbator/barbator.component';
var redirect_component_1 = require("./components/page_redirect/redirect.component");
var business_component_1 = require("./components/page_business/business.component");
var profitability_component_1 = require("./components/page_profitability/profitability.component");
var accounting_systems_component_1 = require("./components/page_accounting_systems/accounting_systems.component");
var installation_component_1 = require("./components/page_installation/installation.component");
var customization_component_1 = require("./components/page_customization/customization.component");
var update_component_1 = require("./components/page_update/update.component");
var site_improvements_component_1 = require("./components/page_site_improvements/site_improvements.component");
var crm_systems_component_1 = require("./components/page_crm_systems/crm_systems.component");
var simple_software_component_1 = require("./components/page_simple_software/simple_software.component");
var _1c_component_1 = require("./components/page_1c/1c.component");
var database_component_1 = require("./components/page_database/database.component");
var ip_telephony_component_1 = require("./components/page_ip_telephony/ip_telephony.component");
var chat_bots_component_1 = require("./components/page_chat_bots/chat_bots.component");
var page404_component_1 = require("./components/page_404/page404.component");
core_2.enableProdMode();
var PageModule = (function () {
    function PageModule() {
    }
    return PageModule;
}());
PageModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            page_component_1.PageComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            main_component_1.MainComponent,
            portfolio_component_1.PortfolioComponent,
            services_component_1.ServicesComponent,
            website_component_1.WebsiteComponent,
            banner_component_1.BannerComponent,
            techs_component_1.TechsComponent,
            about_component_1.AboutComponent,
            contacts_component_1.ContactsComponent,
            owl_reviews_component_1.OwlReviewsComponent,
            owl_techs_component_1.OwlTechsComponent,
            map_component_1.MapComponent,
            subscribe_component_1.SubscribeFormComponent,
            // SimpleFormComp
            // XtComponent,
            // LitelifeComponent,
            // PizzeriaComponent,
            // BarbatorComponent,
            // BinoComponent,
            redirect_component_1.RedirectComponent,
            business_component_1.BusinessComponent,
            profitability_component_1.ProfitabilityComponent,
            accounting_systems_component_1.AccountingSystemsComponent,
            installation_component_1.InstallationComponent,
            customization_component_1.СustomizationComponent,
            update_component_1.UpdateComponent,
            site_improvements_component_1.SiteImprovementsComponent,
            crm_systems_component_1.CRMsystemsComponent,
            simple_software_component_1.SimpleSoftwareComponent,
            _1c_component_1.C1CComponent,
            database_component_1.DatabaseComponent,
            ip_telephony_component_1.IP_telephonyComponent,
            chat_bots_component_1.Chat_botsComponent,
            page404_component_1.NotFoundComponent
        ],
        bootstrap: [
            page_component_1.PageComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], PageModule);
exports.PageModule = PageModule;
//# sourceMappingURL=page.module.js.map