import classes from '../css/Auth.module.css';

const Auth = () => {
    return (
        <main className={classes.auth}>
            <div>
                계정이 없으신가요?
            </div>
            <a href="#">가입하기</a>
        </main>
    )
}

export default Auth;