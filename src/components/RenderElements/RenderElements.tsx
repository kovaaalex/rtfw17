import React from "react";
import { RenderElementsProps } from "../../types/renderElementsProps";
import InputText from "../InputText/InputText";
import Textarea from "../Textarea/Textarea";
import Checkbox from "../Checkbox/Checkbox";
import styles from './RenderElements.module.css';
const RenderElements: React.FC<RenderElementsProps> = ({ formState }) => {
  return (
    <div>
        {Array.from({ length: formState.input }).map((_, i) => (
            <div key={`input${i}`} className={styles.renderElement}>
                <label>
                    Input {i + 1}:
                    <InputText/>
                </label>
            </div>
        ))}
        {Array.from({ length: formState.textarea }).map((_, i) => (
            <div key={`textarea${i}`} className={styles.renderElement}>
                <label>
                    Textarea {i + 1}:
                    <Textarea/>
                </label>
            </div>
        ))}
        {Array.from({ length: formState.checkbox }).map((_, i) => (
            <div key={`checkbox${i}`} className={styles.renderElement}>
                <label>
                    <Checkbox/>
                    Checkbox {i + 1}
                </label>
            </div>
        ))}
    </div>
  );
};

export default RenderElements;