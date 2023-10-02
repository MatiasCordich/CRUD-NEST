// Las entities son las representacion de la informacion que vamos a grabar en la base de datos

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
})
export class Task extends Document {

  // Definimos las caracteristicas de nuestros atributos con el decorador @Prop()

  @Prop({
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    required: true,
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
