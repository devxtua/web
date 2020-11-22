"use strict";
var router_1 = require("@angular/router");
var main_component_1 = require("./components/page_main/main.component");
var services_component_1 = require("./components/page_services/services.component");
var website_component_1 = require("./components/page_website/website.component");
var techs_component_1 = require("./components/page_techs/techs.component");
var contacts_component_1 = require("./components/page_contacts/contacts.component");
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
var appRoutes = [
    { path: '', component: main_component_1.MainComponent },
    // {path: 'portfolio', component: PortfolioComponent},
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'website', component: website_component_1.WebsiteComponent },
    { path: 'techs', component: techs_component_1.TechsComponent },
    // {path: 'about', component: AboutComponent},
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    // {path: 'portfolio/xt', component: XtComponent},
    // {path: 'portfolio/litelife', component: LitelifeComponent},
    // {path: 'portfolio/pizzeria_da_persio', component: PizzeriaComponent},
    // {path: 'portfolio/barbator', component: BarbatorComponent},
    // {path: 'portfolio/bino', component: BinoComponent},
    { path: 'redirect', component: redirect_component_1.RedirectComponent },
    { path: 'business_promotion', component: business_component_1.BusinessComponent },
    { path: 'profitability', component: profitability_component_1.ProfitabilityComponent },
    { path: 'accounting_systems', component: accounting_systems_component_1.AccountingSystemsComponent },
    { path: 'installation', component: installation_component_1.InstallationComponent },
    { path: 'customization', component: customization_component_1.СustomizationComponent },
    { path: 'update', component: update_component_1.UpdateComponent },
    { path: 'site_improvements', component: site_improvements_component_1.SiteImprovementsComponent },
    { path: 'crm_systems', component: crm_systems_component_1.CRMsystemsComponent },
    { path: 'simple_software', component: simple_software_component_1.SimpleSoftwareComponent },
    { path: '1c', component: _1c_component_1.C1CComponent },
    { path: 'database', component: database_component_1.DatabaseComponent },
    { path: 'ip_telephony', component: ip_telephony_component_1.IP_telephonyComponent },
    { path: 'chat_bots', component: chat_bots_component_1.Chat_botsComponent },
    // NotFoundComponent 404
    { path: '404', component: page404_component_1.NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map