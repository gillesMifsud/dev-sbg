import { provideRouter, RouterConfig } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { CompetencesComponent } from './competences/competences.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'jeux', component: GamesComponent },
  { path: 'realisations', component: RealisationsComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
