import { Entity } from '@/shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    UserEntity.validate(props);
    super(props, id);
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  static validate(props: UserProps): boolean {
    const validator = UserValidatorFactory.create();
    validator.validate(props);
  }
}
