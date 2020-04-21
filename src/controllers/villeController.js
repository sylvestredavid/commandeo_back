import mongoose from 'mongoose'
import { VilleSchema } from '../models/villeModel'

const Ville = mongoose.model('Ville', VilleSchema)

/*
*ajouter un commerce
*/
export const addVille = (req, res) => {
    let newVille = new Ville(req.body)

    newVille.save((err, ville) => {
        if(err) {
            res.send(err)
        }
        res.json(ville)
    })
}

/*
*recuperer tout les commerces
*/
export const getVilles = (req, res) => {
    Ville.find({}, (err, villes) => {
        if(err) {
            res.send(err)
        }
        res.json(villes)
    })
}