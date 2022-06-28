import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  constructor(private character:RickandmortyService,private route:ActivatedRoute) { }
  personaje:any={
    "name":"",
    "image":"",
    "species":""
  }
  ngOnInit(): void {
    this.obtenerId(this.route.snapshot.params['id'])
  }
  obtenerId(id:Number){
    this.character.getCharacterById(id).subscribe(
      data=>{
        this.personaje=data
      }
    )
  }
}
