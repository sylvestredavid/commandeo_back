import mongoose from 'mongoose'


var ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

export const CommerceSchema = new Schema({
    nom: {
        type: String,
        lowercase: true,
        required: "Entrez un nom"
    },
    type: {
        type: String,
        lowercase: true,
        required: "Entrez un type de commerce"
    },
    email: {
        type: String,
        required: "Entrez un email"
    },
    telephone: {
        type: String,
        required: "Entrez un telephone"
    },
    localisation: {
        adresse: String,
        ville: String,
        coordonees: {
            lat: Number,
            long: Number
        }
    },
    notation: Number,
    avis: [
        {
            note: Number,
            avi: String
        }
    ],
    carte: [
        {
            titre: String,
            section: [
                {
                    description: String,
                    prix: Number
                }
            ]
        }
    ],
    userId:{
        type: ObjectId,
        required: 'Entrez un user id'
    }
})