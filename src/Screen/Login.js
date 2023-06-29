import React from 'react';
import classes from '../css/Login.module.css';
import Auth from '../Screen/Auth';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate("/main");
    }
    const LoginHandler = (e) => {
        e.preventDefault();
    }

    const emailChangeHandler = () => {

    }

    const passwordChangeHandler = () => {

    }

    return (
        <div>
            <div className={classes.login}>
                <section>
                    <h2 className={classes.spacing}>헐레벌떡</h2>
                    <form onSubmit={LoginHandler}>
                        <div className={classes.control}>
                            <input type='email' placeholder='전화번호, 사용자 이름, 또는 이메일' onChange={emailChangeHandler} />
                            <input type='password' placeholder='비밀번호' onChange={passwordChangeHandler} />
                        </div>
                        <button className={classes.button} onClick={navigateToMain}>로그인</button>
                    </form>
                    <div className={classes.hr}>또는</div>
                    <div className={classes.kakaoButton}>
                        <img className={classes.img} src='img/kakao.png' alt='kakao'></img>
                        <a href="#">카카오톡으로 로그인</a>
                    </div>
                    <div className={classes.forgotPwd}>
                        <a href="#">비밀번호를 잊으셨나요?</a>
                    </div>
                </section>
            </div>
            <Auth/>
        </div>
       
        
        
    );
};

export default Login;
