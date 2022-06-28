import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';
import { Episodio } from '../modules/Episodio';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episodios:any
  episodiosAux:Episodio[]=[]
  displayedColumns: string[] = ['name','air_date','episode'];
  dataSource:any
  paginas:NumberInput=0;
  constructor(private episodeService:RickandmortyService) {
    
  }
  ngOnInit(): void {
    this.obtenerEpisodios()
  }
  obtenerEpisodios(){
    this.episodeService.getEpisodes().subscribe(
      data=>{    
        this.episodios=data        
        this.paginas=this.episodios.info.pages        
        this.episodiosAux=this.episodios.results
        this.dataSource=this.episodiosAux    
        console.log(this.episodiosAux)     
      }
    )
  }
  handlePage(event:PageEvent){
    this.episodeService.getAllEpisodes(event.pageIndex+1).subscribe(
      data=>{
        this.episodios=data
        this.episodiosAux=this.episodios.results
        this.dataSource=this.episodiosAux
      }
    )
  }
}
