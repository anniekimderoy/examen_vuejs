import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/Index.vue';
import partieIndex from '../views/partie/Index.vue';
import partieShow from '../views/partie/Show.vue';
import equipeIndex from '../views/equipe/Index.vue';
import equipeShow from '../views/equipe/Show.vue';
import joueurIndex from '../views/joueur/Index.vue';
import joueurCreate from '../views/joueur/Create.vue';
import joueurShow from '../views/joueur/Show.vue';
import joueurEdit from '../views/joueur/Edit.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: IndexView
        },
        {
            path: '/partie',
            name: 'partie.index',
            component: partieIndex
        },
        {
            path: '/partie/:id',
            name: 'partie.show',
            component: partieShow,
            props: true,
        },
        {
            path: '/equipe',
            name: 'equipe.index',
            component: equipeIndex
        },
        {
            path: '/equipe/:id',
            name: 'equipe.show',
            component: equipeShow,
            props: true,
        },
        {
            path: '/joueur',
            name: 'joueur.index',
            component: joueurIndex
        },
        {
            path: '/joueur/create',
            name: 'joueur.create',
            component: joueurCreate,
        },
        {
            path: '/joueur/:id',
            name: 'joueur.show',
            component: joueurShow,
            props: true,
        },
        {
            path: '/joueur/:id/edit',
            name: 'joueur.edit',
            component: joueurEdit,
            props: true,
        },
    ]
});

export default router;
