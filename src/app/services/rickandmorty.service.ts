import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http:HttpClient) { }
  getEpisodes(){
    return this.http.get('https://rickandmortyapi.com/api/episode')
  }
  getAllEpisodes(page:Number){
    return this.http.get('https://rickandmortyapi.com/api/episode?page='+page)
  }
  getAll(page:Number){
    return this.http.get('https://rickandmortyapi.com/api/character/?page='+page)
  }
  getCharacter(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
  getCharacterById(id:Number){
    return this.http.get('https://rickandmortyapi.com/api/character/'+id)
  }
  searchByName(name:String){
    return this.http.get('https://rickandmortyapi.com/api/character/?name='+name)
  }
}
