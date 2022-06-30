import { InfoCharacter } from './InfoCharacter';
import { Personaje } from './Personaje';

export interface CharacterResponse{
    info:InfoCharacter
    results:Personaje[]
}