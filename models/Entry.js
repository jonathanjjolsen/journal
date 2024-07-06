import { Schema, model } from 'mongoose';

const entrySchema = new Schema({
    createdAt: String,
    body: String
});

export default model('Entry', entrySchema);