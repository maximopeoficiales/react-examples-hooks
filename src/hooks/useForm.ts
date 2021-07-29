import { ChangeEvent, useState } from "react";

export function useForm<Type>(values: Type) {
    const [formValues, setFormValues] = useState(values);

    const handlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    };

    return { formValues, handlerChange };


}
