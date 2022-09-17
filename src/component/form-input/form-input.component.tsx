import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Input, Group } from "./form-input.style";

type FormInputProps = { lable: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ lable, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
      {lable && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {lable}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
