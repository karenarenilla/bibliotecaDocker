import { prop, Typegoose } from "typegoose"

class LibroSchema extends Typegoose {

    @prop() codigo?: string;
    @prop() name?: string;
}

export const LibroModel = new LibroSchema().getModelForClass(LibroSchema);
