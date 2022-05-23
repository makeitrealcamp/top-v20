import { useState } from "react";

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleFormChange = (e) => {
    const { name, value: inputValue, type, checked } = e.target;
    const value = type === 'checkbox' ? checked : inputValue;

    setForm({
      ...form,
      [name]: value
    })
  }

  return {
    form,
    handleFormChange,
  }
}

export default useForm;
