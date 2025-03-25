import { createRouter, createWebHistory } from 'vue-router'

import Page404 from "./views/Page404.vue";
import PageMainStart from "~/views/PageMainStart.vue";
import PageMainVote from "~/views/PageMainVote.vue";
import PageMainFinal from "~/views/PageMainFinal.vue";
import PageAbout from "~/views/PageAbout.vue";
import PageContacts from "~/views/PageContacts.vue";
import pagePartners from "~/views/PagePartners.vue";
import PageMissProfile from "~/views/PageMissProfile.vue";

export default function createVueRouter(Store) {
    const routes = [
        {path: '/', name: 'default', component: PageMainVote, meta: {}},
        {path: '/start_test_page_ab85cf1f-1f58-4c13-9315-7db30f6207df', name: 'missMainStart', component: PageMainStart, meta: {}},
        {path: '/vote', name: 'missMainVote', component: PageMainVote, meta: {}},
        {path: '/final_test_page_ab85cf1f-1f58-4c13-9315-7db30f6207df', name: 'missMainFinal', component: PageMainFinal, meta: {}},
        {path: '/partners', name: 'missPartners', component: pagePartners, meta: {}},
        {path: '/about', name: 'missAbout', component: PageAbout, meta: {}},
        {path: '/contacts', name: 'missContacts', component: PageContacts, meta: {}},
        {path: '/profile/:missId', name: 'missProfile', component: PageMissProfile, meta: {}},

        {path: '/:pathMatch(.*)*', name: 'page404', component: Page404},
    ];

    const Router = createRouter({
        history: createWebHistory(),
        routes: routes,
    });

    // let router_got_user = false;
    // Router.beforeEach(async (to, from, next) => {
        // if (!router_got_user) {
        //     await Store.dispatch('GET_USER');
        //     router_got_user = true;
        // }

        // const notLoginedRedirect = {
        //     name: 'login'
        // }
        // const loginedRedirect = {
        //     name: 'profile',
        // }

        // if (to.path === '/' || to.path === '') {
        //     if (Store.state.user.isSignedIn) {
        //         next(loginedRedirect);
        //         return;
        //     }
        //     next(notLoginedRedirect);
        //     return;
        // }

        // Login required redirects
        // if (to.matched.some(record => record.meta.loginRequired === true || record.meta.adminRequired === true)) {
        //     if (Store.state.user.isSignedIn) {
        //         next();
        //         return;
        //     }
        //     next(notLoginedRedirect);
        //     return;
        // } else if (to.matched.some(record => record.meta.noLoginRequired === true)) {
        //     if (!Store.state.user.isSignedIn) {
        //         next();
        //         return;
        //     }
        //     next(loginedRedirect);
        //     return;
        // }
        // if (to.matched.some(record => record.meta.adminRequired === true)) {
        //     if (Store.state.user.isAdmin) {
        //         next();
        //         return;
        //     }
        //     next(loginedRedirect);
        //     return;
        // }
        // next();
    // });

    Router.beforeResolve(async (to) => {
        if (window?.onbeforeunload) {
            if (confirm("Изменения не сохранены. Вы уверены, что хотите покинуть страницу?"))
                window.onbeforeunload = null;
            else
                return false;
        }
    });

    return Router;
}
