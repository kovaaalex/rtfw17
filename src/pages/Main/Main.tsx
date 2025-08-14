import styles from './Main.module.css';
import Button from "../../components/Button/Button";
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
                <Button onClick={handleNavigate} buttonContent='FORM'/>
            </div>
        </div>
    )
}
export default Main;