import { FormInputLabel, Input, Group } from "./form-input.style.jsx";
const FormInput = ({ lable, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
      {lable && (
        <FormInputLabel shrink={otherProps.value.length}>
          {lable}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
