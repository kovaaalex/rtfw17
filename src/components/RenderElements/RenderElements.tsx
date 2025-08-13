import React from "react";
import { IFormBuilder } from "../../types/formBuilder";

interface RenderElementsProps {
  formState: IFormBuilder;
}

const RenderElements: React.FC<RenderElementsProps> = ({ formState }) => {
  return (
    <div>
      {Array.from({ length: formState.input }).map((_, i) => (
        <div key={`input-${i}`}>
          <label>
            Input {i + 1}:
            <input type="text"/>
          </label>
        </div>
      ))}
      {Array.from({ length: formState.textarea }).map((_, i) => (
        <div key={`textarea-${i}`}>
          <label>
            Textarea {i + 1}:
            <textarea/>
          </label>
        </div>
      ))}
      {Array.from({ length: formState.checkbox }).map((_, i) => (
        <div key={`checkbox${i}`}>
          <label>
            <input type="checkbox" />
            Checkbox {i + 1}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RenderElements;