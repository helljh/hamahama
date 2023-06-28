import React from 'react';
import {FaInstagram} from "react-icons/fa";
import {FaHouse} from "react-icons/fa6";
import {BsSearch, BsPlayBtn, BsSend, BsHeart, BsPlusSquare} from "react-icons/bs";
import {AiOutlineCompass, AiOutlineMenu} from "react-icons/ai";
import {CgProfile, CgSmileNone} from "react-icons/cg";
import '../css/Menu.css';

const MenuBar= ()=>{
    return(
        <div className="page-box">
            <div className="menu-bar">
                <div className="main-icon">
                    <button>
                        헐레벌떡
                    </button>    
                </div>
                <div className="menu-icons">
                    <div className="menu-icon">
                        <button>
                            <FaHouse/>
                            <div>홈</div>
                        </button>
                        
                    </div>
                    <div className="menu-icon">
                        <button>
                            <BsSearch />
                            <div>검색</div>
                        </button>
                    </div>
                    <div className="menu-icon">
                        <button>
                            <AiOutlineCompass />
                            <div>지도</div>
                        </button>
                    </div>
                    <div className="menu-icon">
                        <button>
                            <BsPlayBtn />
                            <div>릴스</div>
                        </button>
                    </div>
                    <div className="menu-icon">
                        <button>
                            <BsSend />
                            <div>메시지</div>
                        </button>
                    </div>
                    <div className="menu-icon">
                        <button>
                            <BsHeart />
                            <div>알림</div>
                        </button>
                    </div>
                    <div className="menu-icon">
                        <button>
                            <BsPlusSquare />
                            <div>만들기</div>   
                        </button>
                    </div>
                    <div className="menu-icon">
                        <button>
                            <CgProfile />
                            <div>프로필</div>
                        </button>
                    </div>
                </div>
                <div className="more-icon">
                    <button>
                        <AiOutlineMenu />
                        <div>더 보기</div>
                    </button>
                </div>
            </div>
            <div className="main-box">
                Hello
            </div>
        </div>
        
    )
}

export default MenuBar;