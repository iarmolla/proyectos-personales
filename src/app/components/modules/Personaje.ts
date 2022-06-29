import { Location } from './Location';
import { Origin } from './Origin';
export interface Personaje{
    id:Number,
    name:String,
    status:String,
    gender:String,
    species:String,
    image:String,
    location:Location,
    origin:Origin,
    episode:String[]
}