// Creo mi interfaz Task

export interface Task {
    _id: string;
    title: string,
    description: string,
    done?: boolean
    createdAt?: Date;
    updatedAt?: Date;
}

// Creo un tipo para mi interfaz Task para que me omita los campos id, createdAt y updatedAt

export type CreateTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt' >

export type UpdateTask = Partial<CreateTask>