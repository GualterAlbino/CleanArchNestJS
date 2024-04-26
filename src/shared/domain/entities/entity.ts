//Apesar de ferir a Clean Architecture, a importação de uuidv4 é necessária para a criação de entidades
import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T = any> {
  //Atributo id é obrigatório para a criação de entidades
  public readonly _id: string;

  //Demais atributos da entidade
  public readonly props: T;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? uuidv4();
  }

  get id(): string {
    return this.id;
  }

  //Transforma a entidade em um objeto JSON
  //Necessario para descartar metodos da entidade e ter somente os atributos
  //Todas as propriedades de T são obrigatórias junto com o id
  toJSON(): Required<{ id: string } & T> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & T>; //Força a tipagem de retorno
  }
}
