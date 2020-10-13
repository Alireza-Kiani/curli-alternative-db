import { Schema, Document, model } from 'mongoose';

export interface LinkMeta extends Document {
    link: string,
    shortLink: string,
    date?: Date
}

const LinkSchema = new Schema({

    shortLink: {
        type: String,
        unique: true
    },
    link: {
        type: String
    },
    date: {
        type: Date
    }

}, { 
    timestamps: true 
});


const Link = model<LinkMeta>('Link', LinkSchema);

export default Link;