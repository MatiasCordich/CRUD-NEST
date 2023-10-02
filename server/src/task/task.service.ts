import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Task } from "./entities/task.entity";
import { isValidObjectId, Model } from "mongoose";

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Object> {
    try {
      // Creamos nuestro nuevo pokemon a partir del modelo y lo creamos con el metodo que nos ofrece para los modelos
      const newTask = await this.taskModel.create(createTaskDto);

      // Retornamos el nuevo pokeon creado
      return { msg: "Tarea CREADA", newTask };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(): Promise<Task[]> {
    let tasks: Task[];

    // Primero buscamos nuestra lista de pokemones en la DB
    tasks = await this.taskModel.find();

    // Si la lista esta vacia entonces devuelvo un mensaje de error
    if (tasks.length == 0) {
      throw new BadRequestException("No hay tareas en la lista");
    }

    // Caso contrario que me de la lista de pokemones
    return tasks;
  }

  async findOne(id: string): Promise<Task> {

    let task: Task;

    // Primero vamos a hacer unas capas de validaciones que seran las siguientes

    // Primero valido si mi id que le pase por parametro es un numero, si lo es quiero que me busques el pokemon por el id

    /**
     * En EL param paso un 2 por teclado
     * Ese 2 cuando lo escribo es un string
     * Lo transformo en un number poniendole el signo + adelante
     * Valido con isNan() que me dice si NO es un Numero
     * isNan(+2), COMO +2 ahora es un number si lo pongo en isNaN() me va a dar FALSE
     * Por eso pongo !isNan() para que me de TRUE y asi validar que el numero que pase por parametro, que era un string y se trasnformo en number, es un numero
     */

    if (!isNaN(+id)) task = await this.taskModel.findOne({ nro: id });

    // Segundo, valido si existe la tarea encontrada y si mi id es un MongoID, si lo es entonces busco por ID

    if (!task && isValidObjectId(id)) {
      task = await this.taskModel.findById(id);
    }

    if (!task) throw new NotFoundException("La tarea no existe");

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {

    // Primero buscamos la tarea a actualizar
    let task: Task;

    task = await this.findOne(id);

    // Si la tarea  a encontrar no existe mostarme un error

    if (!task) throw new NotFoundException("La tarea no existe");

    // Si la tarea existe voy a modificar la data del DTO de la variable pokemon

    try {
      // Actulizamos la data del pokemon encontrado
      await task.updateOne(updateTaskDto);

      // Creamos una variable que contenga la nueva informacion, para eso va a tener, todas la propiedades del objeto pokemon (convertidas en JSON) y voy a sobreescribirles las propiedades que tiene updatePokemonDto

      const upatedTask = { ...task.toJSON(), ...updateTaskDto };

      return { msg: "Tarea MODIFICADA", upatedTask };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string): Promise<Object> {

    // Primero buscamos la tarea a eliminar mediante el id
    const taskToDelete = await this.findOne(id);

    // Si la tarea a eliminar no existe, entonces mostarme un error

    if (!taskToDelete) throw new NotFoundException("La tarea no existe");

    // Si existe entonces eliminala

    const deletedTask = await taskToDelete.deleteOne();

    return { msg: "Tarea ELIMINADA", deletedTask };
  }

  // Vamos a crear algunos metodos que nos sirven para poder modularizar el codigo

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException("La tarea ya existe");
    }

    throw new InternalServerErrorException("No se pudo crear la tarea");
  }
}
