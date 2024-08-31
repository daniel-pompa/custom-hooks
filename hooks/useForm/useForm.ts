import { useState, ChangeEvent } from 'react';

interface FormState {
  [key: string]: any;
}

interface UseFormReturn<T> {
  formState: T;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}

export const useForm = <T extends FormState>(
  initialForm: T = {} as T
): UseFormReturn<T> => {
  const [formState, setFormState] = useState<T>(initialForm);

  /**
   * Handler for input changes. Updates the form state with the new input values.
   * @param {ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**  Resets the form state to its initial values. */
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
