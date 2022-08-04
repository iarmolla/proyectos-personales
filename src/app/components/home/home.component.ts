import { CharacterResponse } from './../modules/CharacterResponse';
import { RickandmortyService } from './../../services/rickandmorty.service';
import { Component, Inject, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NumberInput } from '@angular/cdk/coercion';
import { Personaje } from '../modules/Personaje';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ThisReceiver } from '@angular/compiler';
import { FormControl } from '@angular/forms';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
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
  loadSpinner:Boolean=false
  toppings = new FormControl('');
  toppingList: string[] = ['alive','female','male','human'];
  filter:any={
    gender:"",
    status:"",
    species:""
  }
  constructor(private characterService:RickandmortyService,public dialog:MatDialog) { 
    
  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.loadSpinner=true
    },500)
    this.obtenerPersonajes()
    // this.onSearch()
  }
  obtenerPersonajes():void{
    this.characterService.getAll(this.indiceDePagina).subscribe(
      (data:any)=>{
        this.personajesAux=data
        this.personajes=data;
        this.personajesAux=this.personajes.results;
        let numeroDePaginas=this.personajes.info.pages; 
        this.paginas=numeroDePaginas       
      }
    )
  }
  //busqueda para que el usuario pueda buscar cualquier personaje
  onSearch(){
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
  //filtrar por personaje
  filterCharacter(){  
    this.toppings.value.forEach((element: string) => {
      switch(element){
        case 'female':
          this.filter.gender=element
          this.filterByGender(this.filter.gender)
          break;
        case 'human':          
          this.filter.species=element   
          this.filterBySpecies(this.filter.species)           
          break;
      }      
    });
  }
  //filtrar por genero
  filterByGender(gender:String){    
    this.characterService.getByGender(gender).subscribe(
      (data:any)=>{
        console.log(data);
        this.personajesAux=data
        this.personajes=data;
        this.personajesAux=this.personajes.results;
        let numeroDePaginas=this.personajes.info.pages; 
        this.paginas=numeroDePaginas      
      }
    )
  }
  filterByStatus(status:String){
    console.log(status)
    this.characterService.getByStatus(status).subscribe(
      (data:any)=>{
        this.personajesAux=data
        this.personajes=data;
        this.personajesAux=this.personajes.results;
        let numeroDePaginas=this.personajes.info.pages; 
        this.paginas=numeroDePaginas 
      }
    )
  }
  filterBySpecies(species:String){
    this.characterService.getBySpecies(species).subscribe(
      (data:any)=>{
        this.personajesAux=data
        this.personajes=data;
        this.personajesAux=this.personajes.results;
        let numeroDePaginas=this.personajes.info.pages; 
        this.paginas=numeroDePaginas 
      }
    )
  }
  //boton de ordenar pero sin funcionalidad
  // orderByName(){
  // }
  openDialog(id:Number){
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{data:id})
  }
}
