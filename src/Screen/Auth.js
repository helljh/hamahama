import classes from '../css/Auth.module.css';

const Auth = () => {
    return (
        <main className={classes.auth}>
            <button className={classes.forgotButton}>
                <span className={classes.forgot}>
                    계정이 없으신가요?
                </span>
            </button>
        </main>
    )
}

export default Auth;