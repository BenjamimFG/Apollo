import React, { InputHTMLAttributes, ChangeEventHandler } from 'react';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  color: #42332b;
  width: 100%;
  margin: 0 0 10px 0;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
  color: var(--header);
  background-color: var(--input);
  padding: 10px;
  border: none;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  ::placeholder {
    color: var(--header);
    font-weight: 500;
  }
`;

export const Select = styled.select`
  color: var(--header);
  background-color: var(--input);
  border: none;
  padding: 10px;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-top: 10px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.7em;
`;
interface ApolloTextInputLaranjaProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string | number;
  name: string;
  errorMessage?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  prefix?: string;
  postfix?: string;
}

const LeftInputAdornment = styled.span`
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 9999;
  color: #cd6538;
  user-select: none;
`;

const RightInputAdornment = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 9999;
  color: #cd6538;
  user-select: none;
`;

// retorna o tamanho de uma string em pixels
function strLengthInPx(str: string, font = '14px Merriweather'): number {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context!.font = font;

  return Math.ceil(context!.measureText(str).width);
}

export const TextInputLaranja: React.FC<ApolloTextInputLaranjaProps> = ({
  label,
  name,
  value,
  onChange,
  errorMessage,
  type,
  placeholder,
  prefix,
  postfix,
  ...props
}) => {
  return (
    <Div {...props}>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={prefix ? { paddingLeft: `${strLengthInPx(prefix) + 20}px` } : {}}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {prefix && <LeftInputAdornment>{prefix}</LeftInputAdornment>}
      {postfix && <RightInputAdornment>{postfix}</RightInputAdornment>}
    </Div>
  );
};
