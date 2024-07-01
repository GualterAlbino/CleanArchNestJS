import { ClassValidatorFields } from './class-validator-fields';

class StubClassValidatorFields extends ClassValidatorFields<{ field: string }> {
  field: string;
}

describe('ClassValidatorFields unit tests', () => {
  it('should validate data', () => {
    const stubClassValidatorFields = new StubClassValidatorFields();
    const data = { field: 'value' };
    const isValid = stubClassValidatorFields.validate(data);
    expect(isValid).toBe(true);
    expect(stubClassValidatorFields.validatedData).toEqual(data);
  });
});
