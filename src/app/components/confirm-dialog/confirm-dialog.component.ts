import { Personaje } from './../modules/Personaje';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  character:Personaje={
    id: 0,
    name: "undefined",
    status:"undefined",
    gender:" undefined",
    species:" undefined",
    image: "undefined",
    location:{
      name:"",
      url:""
    },
    origin:{
      name:"",
      url:""
    }
  }
  iconColor:Boolean=false
  constructor(public dialogRef:MatDialogRef<ConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) public message:Number,private characterService:RickandmortyService) { 
    
  }
  ngOnInit(): void {
    this.getCharacterById()
  }
  getCharacterById(){
    this.characterService.getCharacterById(this.message).subscribe(
      (data:any)=>{
        this.character=data 
        if(this.character.status=="Alive"){
          this.iconColor=true
        }else if(this.character.status=="Dead"){
          this.iconColor=false
        }
      }
    )
  }

}
