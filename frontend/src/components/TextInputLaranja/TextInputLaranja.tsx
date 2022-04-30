import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { ChangeEventHandler } from "react";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Label = styled.label`
  color: #42332b;
  width: 100%;
  margin: 0 0 10px 0;
`;

const Input = styled.input`
  background-color: var(--input);
  padding: 10px;
  border: none;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
  ::placeholder {
    color: var(--header);
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.7em;
`;
interface ApolloTextInputLaranjaProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string | number;
  name: string;
  errorMessage?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const TextInputLaranja: React.FC<ApolloTextInputLaranjaProps> = ({
  label,
  name,
  value,
  onChange,
  errorMessage,
  type,
}) => {
  return (
    <Div>
      <Label>{label}</Label>
      <Input type={type} value={value} name={name} onChange={onChange} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Div>
  );
};