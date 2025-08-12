import { introText  } from "../contents/textdata";
import { CircleUserRound,Cake,House,Mail,GraduationCap,Phone } from 'lucide-react';

function Intro(){
    return(
        <section id='intro'>
            <div className="intro_inner">
                <div>
                    <h2 className="intro_title">{introText.title}</h2>
                    <h2 className="intro_title">{introText.subtitle}</h2>
                </div>
                <div className="intro_text">
                    <div className="text">
                        <div className="title">ABOUT ME</div>
                        <div className="info-box">
                            <div className="info-item">
                                <CircleUserRound className="info-icon"/>
                                <div>
                                    <p>이름</p>
                                    <p>{introText.desc[0]}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Cake className="info-icon"/>
                                <div>
                                    <p>생년월일</p>
                                    <p>{introText.desc[1]}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <House className="info-icon"/>
                                <div>
                                    <p>위치</p>
                                    <p>{introText.desc[2]}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Phone className="info-icon"/>
                                <div>
                                    <p>연락처</p>
                                    <p>{introText.desc[3]}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <a href="mailto:qhfka0090@naver.com">
                                    <Mail className="info-icon"/>
                                    <div>
                                            <p>이메일</p>
                                            <p>{introText.desc[4]}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="info-item">
                                <GraduationCap className="info-icon"/>
                                <div>
                                    <p>학력</p>
                                    <p>{introText.desc[5]}</p>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <span>
                                <CircleUserRound />
                            </span>
                            {introText.desc[1]}
                        </div>
                        <div>
                            <span>
                                <Cake />
                            </span>
                            {introText.desc[2]}
                        </div>
                        <div>
                            <span>
                                <House />
                            </span>
                            {introText.desc[3]}
                        </div>
                        <div>
                            <span>
                                <Send />
                            </span>
                            {introText.desc[4]}
                        </div> */}
                    </div>
                </div>
                {/* <div className="intro_lines bottom">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div> */}
            </div>
        </section>
    )
}

export default Intro;