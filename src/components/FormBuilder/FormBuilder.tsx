import { FormBuilderProps } from "../../types/formBuilder";
import styles from './FormBuilder.module.css';

const FormBuilder = ({ formConfig, onChange }: FormBuilderProps) => {
  return (
    <>
      <div className={styles.field}>
        <label className={styles.label}>
          Input:
          <input
            type="number"
            name="input"
            value={formConfig.input}
            onChange={onChange}
            min="0"
            max="10"
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>
          Textarea:
          <input
            type="number"
            name="textarea"
            value={formConfig.textarea}
            onChange={onChange}
            min="0"
            max="10"
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>
          Checkbox:
          <input
            type="number"
            name="checkbox"
            value={formConfig.checkbox}
            onChange={onChange}
            min="0"
            max="10"
            className={styles.input}
          />
        </label>
      </div>
    </>
  );
};

export default FormBuilder;