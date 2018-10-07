import { Component } from '@angular/core';

@Component({
  selector: 'notfound',
  template: `
    <h1>Aucune page trouvée!</h1>
    <a routerLink="/home" routerLinkActive="active">Retour à l'accueil</a>
    `
})

export class PageNotFoundComponent { }
