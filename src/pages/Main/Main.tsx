import styles from './Main.module.css';
import FormButton from "../../components/FormButton/FormButton";
import { useNavigate } from "react-router";
import { FORM__ROUTE } from "../../constants/routes";
const Main = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(FORM__ROUTE);
    }
    return(
        <div className={styles.mainPage}>
            <h1>Welcome to the Main Page!!!!!</h1>
            <div className={styles.formContainer}>
                <h4>Click this button</h4>
                <FormButton onClick={handleNavigate}/>
            </div>
        </div>
    )
}
export default Main;