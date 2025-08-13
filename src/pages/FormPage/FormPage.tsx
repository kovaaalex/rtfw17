import { useState } from "react";
import Button from "../../components/Button/Button";
import { defaultForm } from "../../constants/forms";
import { IFormBuilder } from "../../types/formBuilder";
import RenderElements from "../../components/RenderElements/RenderElements";

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
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <h2>Form Builder</h2>
            
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                    Input:
                    <input
                        type="number"
                        name="input"
                        value={formConfig.input}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                    Textarea:
                    <input
                        type="number"
                        name="textarea"
                        value={formConfig.textarea}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                    Checkbox:
                    <input
                        type="number"
                        name="checkbox"
                        value={formConfig.checkbox}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>
            <Button onClick={handleBuild} buttonContent="Build" />
            {activeForm && <RenderElements formState={activeForm} />}
        </div>
    )
}

export default FormPage;