import { Schema, model, models } from 'mongoose';


export type TestType = {
    name: string;
    description: string;

}

const testSchema = new Schema<TestType>({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const Test = models.Test || model<TestType>('Test', testSchema);

export default Test;