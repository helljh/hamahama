import React from 'react';
import classes from '../css/Login.module.css';

const Login = () => {

    const LoginHandler = (e) => {
        e.preventDefault();
    }

    const emailChangeHandler = () => {

    }

    const passwordChangeHandler = () => {

    }

    return (
        <main className={classes.login}>
            <section>
                <h2 className={classes.spacing}>헐레벌떡</h2>
                <form onSubmit={LoginHandler}>
                    <div className={classes.control}>
                        <input type='email' placeholder='전화번호, 사용자 이름, 또는 이메일' onChange={emailChangeHandler} />
                        <input type='password' placeholder='비밀번호' onChange={passwordChangeHandler} />
                    </div>
                    <button className={classes.button}>로그인</button>
                </form>
                <div className={classes.hr}>또는</div>
                <button className={classes.kakaoButton}>
                    <span className={classes.span}>
                        <img className={classes.img} src='img/kakao.png' alt='kakao'></img>
                        <h6>카카오톡으로 로그인</h6>
                    </span>
                </button>
                <div>
                    <button className={classes.kakaoButton}>
                        <p>비밀번호를 잊으셨나요?</p>
                    </button>
                </div>
            </section>
            
        </main>
        
        
    );
};

export default Login;