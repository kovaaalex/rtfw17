import { useState } from "react";
import Button from "../../components/Button/Button";
import { defaultForm } from "../../constants/forms";
import { IFormBuilder } from "../../types/formBuilder";
import RenderElements from "../../components/RenderElements/RenderElements";
import styles from './FormPage.module.css';
import FormBuilder from "../../components/FormBuilder/FormBuilder";
const FormPage = () => {
    const [formConfig, setFormConfig] = useState<IFormBuilder>(defaultForm);
    const [activeForm, setActiveForm] = useState<IFormBuilder | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormConfig(prev => ({
            ...prev,
            [name]: Math.max(0, Math.min(10, +value || 0))
        }));
    }
    const handleBuild = () => {
        setActiveForm({...formConfig});
    }
    return (
        <div className={styles.formPage}>
            <h2>Form Builder</h2>
            <FormBuilder 
                formConfig={formConfig} 
                onChange={handleChange} 
            />
            <Button onClick={handleBuild} buttonContent="Build" />
            {activeForm && <RenderElements formState={activeForm} />}
        </div>
    )
}

export default FormPage;