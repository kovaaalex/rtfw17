import { FormButtonProps } from '../../types/buttonProps';
import styles from './FormButton.module.css';

const FormButton: React.FC<FormButtonProps> = ({onClick}) => {
    return(
        <button onClick={onClick} className={styles.formButton}>FORM</button>
    )
}
export default FormButton;