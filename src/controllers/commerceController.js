import mongoose from 'mongoose'
import { CommerceSchema } from '../models/commerceModel'

const Commerce = mongoose.model('Commerce', CommerceSchema)

/*
*ajouter un commerce
*/
export const addCommerce = (req, res) => {
    let newCommerce = new Commerce(req.body) 

    newCommerce.save((err, commerce) => {
        if(err) {
            res.send(err)
        }
        res.json(commerce)
    })
}

/*
*recuperer tout les commerces
*/
export const getCommerces = (req, res) => {
    Commerce.find({}, (err, commerces) => {
        if(err) {
            res.send(err)
        }
        res.json(commerces)
    })
}

/*
*trouver les commerces d'une ville
*/
export const getCommerceByVille = (req, res) => {
    Commerce.find({"localisation.ville" : req.query.ville}, (err, commerce) => {
        if(err) {
            res.send(err)
        }
        res.json(commerce)
    })
}

/*
*trouver les commerces d'un utilisateur
*/
export const getCommerceByUserId = (req, res) => {
    Commerce.find({userId : req.query.userId}, (err, commerce) => {
        if(err) {
            res.send(err)
        }
        res.json(commerce)
    })
}

/*
*fonction de recherche de commerce
*/
export const searchCommerce = (req, res) => {
    if(req.query.ville !="") {
        Commerce.find({$or: [
            {"localisation.ville": req.query.ville, "nom": req.query.search},
            {"localisation.ville": req.query.ville, "type": req.query.search}
            ]}, (err, commerce) => {
            if(err) {
                res.send(err)
            }
            res.json(commerce)
        })
    } else {
        Commerce.find({$or: [
            {"nom": req.query.search},
            {"type": req.query.search}
            ]}, (err, commerce) => {
            if(err) {
                res.send(err)
            }
            res.json(commerce)
        })
    }
}

/*
*modifier un commerce
*/
export const updateCommerce = (req, res) => {
    Commerce.findOneAndUpdate({ _id: req.params.commerceId}, req.body, {new: true}, (err, commerce) => {
        if (err) {
            res.send(err)
        }
        res.json(commerce)
    })
}

/*
*supprimer un commerce
*/
export const deleteCommerce = (req, res) => {
    Commerce.remove({ _id: req.params.commerceId}, (err, contact) => {
        if (err) {
            res.send(err)
        }
        res.json({message: "Effacer commerce avec succès"})
    })
}