import { useState } from 'react';

export default function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);

    function handleChange(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm,
    };
}
