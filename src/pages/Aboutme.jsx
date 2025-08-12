import { introduce, skill  } from "../contents/textdata";


function Aboutme(){
    return(
        <section id="aboutme">
            <div className="abuot-inner">
                <div id="introduce">
                    <div className="about-box" >
                        <div className="title">
                            <h2>INTRODUCE</h2>
                        </div>
                        <div className="introduce">
                            {
                                introduce.map((intro,index)=>(
                                    <div key={index} className="item">
                                        <h3>{intro.title}</h3>
                                        <p>{intro.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id="skill">
                    <div className="about-box" >
                        <div className="title">
                            <h2>MY SKILL</h2>
                        </div>
                        <div className="skill">
                            {
                                skill.map((skill,index)=>(
                                    <div key={index} className="item">
                                        <h3>{skill.title}</h3>
                                        <p>{skill.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;