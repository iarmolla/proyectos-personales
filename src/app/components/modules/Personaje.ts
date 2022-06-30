import { Location } from './Location';
import { Origin } from './Origin';
export interface Personaje{
    id:Number,
    name:String,
    created:String,
    status:String,
    gender:String,
    species:String,
    image:String,
    type:String,
    location:Location,
    origin:Origin,
    episode:String[],
    url:String
}