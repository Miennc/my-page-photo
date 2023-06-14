import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PortfolioPage from "../views/PortfolioPage.vue";
import ContactUsPage from "../views/ContactUsPage.vue";
import demo from "../views/demo.vue";
import MobileAppDevelopment from "../views/MobileAppDevelopment.vue";
import WebDevelopment from "../views/WebDevelopment.vue";
import SupportMaintenance from "../views/SupportMaintenance.vue";
import NewsPage from "../views/NewsPage.vue";
import NewsSharing from "../views/NewsSharing.vue";
import DetailsNew from "../views/DetailsNew.vue";

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    routes: [
        {path: '/', component: HomePage},
        {path: '/portfolio', component: PortfolioPage},
        {path: '/contact-us', component: ContactUsPage},
        {path: '/demo', component: demo},
        {path: '/mobile-app-development', component: MobileAppDevelopment},
        {path: '/web-development', component: WebDevelopment},
        {path: '/support-maintenance', component: SupportMaintenance},
        {path: '/news', component: NewsPage},
        {path: '/news-sharing', component: NewsSharing},
        {path: '/details-new', component: DetailsNew}
    ]
})

export default router
