import { ChangeEvent } from "react";

export interface IFormBuilder {
    input: number;
    textarea: number;
    checkbox: number;
}

export interface FormBuilderProps {
  formConfig: IFormBuilder;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}