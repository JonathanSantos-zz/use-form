import { useState, ChangeEvent } from "react";
import { touchedFunction, resetTouchedFunction } from "./utils";

type useFormProps = {
  initialValues?: object;
  onSubmit?: Function;
};

type touched = {
  [key: string]: boolean;
};

type formState = {
  values: object;
  touched: touched;
};

export const useForm = (props: useFormProps) => {
  const { initialValues } = props;
  const [formState, setFormState] = useState<formState>({
    values: initialValues ?? {},
    touched: touchedFunction(initialValues),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    const name = element.name;
    const value = element.value;

    setFormState({
      values: { ...formState.values, [name]: value },
      touched: { ...formState.touched, [name]: true },
    });
  };

  const resetTouched = () => {
    const touched = resetTouchedFunction(formState.touched);
    setFormState({ ...formState, touched });
  };

  const { values, touched } = formState;

  return {
    values,
    touched,
    handleChange,
    resetTouched,
  };
};
