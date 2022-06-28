import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

let aux
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  personajes:any
  aux2:any
  constructor(private characterService:RickandmortyService) { }

  ngOnInit(): void {
    this.obtenerPersonajes()
  }
  obtenerPersonajes(){
    this.characterService.getCharacter().subscribe(
      data=>{       
     
          this.personajes=data
          aux=this.personajes.results
          this.aux2=aux
          this.personajes=Array.of(this.personajes.results)            
      }
    )
  }
}
