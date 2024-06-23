import { useEffect, useState } from "react";

const useForm = (initialValues, validate, onSubmit) => {
 const [values, setValues] = useState(initialValues);
 const [errors, setErrors] = useState({})
 const [isSubmitting, setIsSubmitting] = useState(false);


useEffect(()=>{
    if(isSubmitting){
        const noErrors = Object.keys(errors).length === 0;
        if(noErrors){
            onSubmit();
        }
        setIsSubmitting(false);
    }
},[errors, isSubmitting, onSubmit])

 const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      // Handle checkbox inputs separately to toggle values in an array
      const isChecked = checked;
      const skill = value;

      // Check if the skill is already in the array
      const updatedSkills = isChecked
        ? [...values.skills, skill] // Add skill if checked
        : values.skills.filter(s => s !== skill); // Remove skill if unchecked

      setValues({
        ...values,
        skills: updatedSkills,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  }
 return {
    values,
    errors,
    handleChange,
    handleSubmit
 }
}

export default useForm;