import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { CharacterComponent } from './components/character/character.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"episodio",
    component:EpisodeComponent
  },
  {
    path:"personajes",
    component:CharacterComponent
  },
  {
    path:"personaje-info/:id",
    component:CharacterInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
