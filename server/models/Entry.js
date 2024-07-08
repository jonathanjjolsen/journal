import { Schema, model } from 'mongoose';

const entrySchema = new Schema({
    content: String,
    createdAt: {
        type: String,
        default: () => new Date().toISOString(),
    },
});

export default model('Entry', entrySchema);