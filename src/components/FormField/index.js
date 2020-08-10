/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWhapper = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;
    
    display: flex;
    align-items: center;
    
    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    
    transition: .1s ease-in-out;
`;

const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;
    
    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;
    
    padding: 16px 16px;
    margin-bottom: 45px;
    
    resize: none;
    border-radius: 4px;
    transition: border-color .3s;
    
    &:focus {
        border-bottom-color: var(--primary);
    }
    &:focus:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
    }
    ${({ value }) => {
        const hasValue = value.length > 0;
        return hasValue && css`
            &:not([type='color']) + ${Label.Text} {
                transform: scale(.6) translateY(-10px);
            }
        `;
    }
}
`;

function FormField({
    label,
    value,
    name,
    type,
    onChange,
    suggestions,
}) {
    const inputId = `id_${type}`;
    const hasSuggestions = Boolean(suggestions.length);

    return (
        <FormFieldWhapper>
            <Label htmlFor={inputId}>
                <Input
                    id={inputId}
                    as={type === 'textarea' ? 'textarea' : ''}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    autoComplete={hasSuggestions ? 'off' : 'on'}
                    list={hasSuggestions ? `suggestionsFor${inputId}` : undefined}
                />
                <Label.Text>{ label }</Label.Text>
                {
                    hasSuggestions && (
                        <datalist id={`suggestionsFor${inputId}`}>
                            {
                                suggestions.map((suggestion) => (
                                    <option key={`suggestionsFor${inputId}_option${suggestion}`} value={suggestion}>
                                        {suggestion}
                                    </option>
                                ))
                            }
                        </datalist>
                    )
                }
            </Label>
        </FormFieldWhapper>
    );
}

FormField.defaultProps = {
    value: '',
    suggestions: [],
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
