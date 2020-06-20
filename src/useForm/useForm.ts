import { useState, ChangeEvent } from "react";

type useFormProps = {
  initialValues?: object;
  onSubmit?: Function;
};

export const useForm = (props: useFormProps) => {
  const { initialValues } = props;
  const [formState, setFormState] = useState({ ...initialValues });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    const name = element.name;
    const value = element.value;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    values: formState,
    handleChange,
  };
};
