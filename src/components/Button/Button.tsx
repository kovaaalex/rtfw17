import { ButtonProps } from '../../types/buttonProps';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({onClick, buttonContent}) => {
    return(
        <button 
            onClick={onClick} 
            className={styles.button}
        >
            {buttonContent}
        </button>
    )
}
export default Button;