export type FieldsErros = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErros; //Mensagens de erro
  validatedData: PropsValidated; //Campos
  validate(data: any): boolean; //Método de validação
}
