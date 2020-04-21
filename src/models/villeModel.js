import mongoose from 'mongoose'


const Schema = mongoose.Schema;

export const VilleSchema = new Schema({
    nom: String,
    image: String
})