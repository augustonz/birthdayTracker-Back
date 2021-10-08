import {Schema, model} from 'mongoose';
import { Birthday } from '../types';

const BirthdaySchema = new Schema<Birthday>({
    person: { type: String, required: true},
    description: {type: String},
    bornAt: {type: Date, required: true},
    color: { type: String, default: '#000000'}
});

const birthdayModel = model<Birthday>('Birthday', BirthdaySchema);

export default birthdayModel;