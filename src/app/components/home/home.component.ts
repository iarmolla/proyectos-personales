import { RickandmortyService } from './../../services/rickandmorty.service';
import { Component, Inject, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NumberInput } from '@angular/cdk/coercion';
import { Personaje } from '../modules/Personaje';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  character:String=""
  personajes:any
  personajesAux:Personaje[]=[]
  paginas:NumberInput=0
  indiceDePagina:Number=1;
  constructor(private characterService:RickandmortyService,public dialog:MatDialog) { 
    
  }
  ngOnInit(): void {
    this.obtenerPersonajes()
    this.onSearch()
  }
  obtenerPersonajes(){
    this.characterService.getAll(this.indiceDePagina).subscribe(
      data=>{
        this.personajes=data;
        this.personajesAux=this.personajes.results;
        let numeroDePaginas=this.personajes.info.pages; 
        this.paginas=numeroDePaginas
      }
    )
  }
  onSearch(){
    console.log(this.indiceDePagina);
    if(this.character==="" || this.character==" " || this.character.length==0){
      this.characterService.getAll(this.indiceDePagina).subscribe(
        data=>{          
          this.personajes=data
          this.personajesAux=this.personajes.results
          let numeroDePaginas=this.personajes.info.pages; 
          this.paginas=numeroDePaginas         
        }
      )
    }
    this.characterService.searchByName(this.character).subscribe(
      data=>{
        this.personajes=data
        this.personajesAux=this.personajes.results
      }
    )
  }
  handlePage(event:PageEvent){
    this.indiceDePagina=event.pageIndex+1
    this.characterService.getAll(event.pageIndex+1).subscribe(
      data=>{
        this.personajes=data
        this.personajesAux=this.personajes.results
      }
    )
  }
  openDialog(id:Number){
    console.log(id);
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{data:id})
  }
}
