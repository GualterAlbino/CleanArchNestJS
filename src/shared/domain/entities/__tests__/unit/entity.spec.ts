import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

// Stub é um objeto que simula um objeto real, porém com comportamento controlado (dublê de teste)
class StubEntity extends Entity<StubProps> {}

describe('Entity Unit Tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 2 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).toBeDefined();
    expect(uuidValidate(entity._id)).toBe(true);
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 2 };
    const id = '123e4567-e89b-12d3-a456-426614174000';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to a Javascript Object', () => {
    const props = { prop1: 'value1', prop2: 2 };
    const id = '123e4567-e89b-12d3-a456-426614174000';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
