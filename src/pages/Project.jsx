import { useEffect, useRef } from "react";
import { projects } from "../contents/textdata";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";

function Project(){
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const horizontal = horizontalRef.current; /* <section ref={horizontalRef} */
        const sections = sectionRef.current;       /* ref={(e)=>{ sectionRef.current[index]=e }} */
        let scrollTween = gsap.to( sections, {
            xPercent:-120*(sections.length-1), // 섹션 개수만큼 x축 이동 비율 설정
            ease:'none',
            scrollTrigger:{
                trigger:horizontal,
                start:'top 56px', /* 어디서부터 시작할지 */
                end:()=>'+=' + horizontal.offsetWidth, // 스크롤 종료 위치
                pin:true, // 스크롤 시 해당 요소 고정 -> 해야지 스크롤 이벤트가 움직여짐
                scrub:1, // 스크롤, 애니메이션 동기화 --> 숫자가 크면클수록 부드럽게 움직이지만 좀 느림
                markers:false, /*  */
                invalidateOnRefresh:true, // 새로고침 애니메이션 무효화
                anticipatePin:1,
            }
        })
        return()=>{
            scrollTween.kill();
        }
    },[]);
    return(
        <section id='project' ref={horizontalRef}>
            <div className="project_inner">
                <h2 className="project_title">
                    Portfolio <em></em>
                </h2>
                <div className="project_wrap">
                    { projects.map((project,index)=>(
                        <article className={`project_item p${index+1}`} key={index}
                            ref={(el)=>{ sectionRef.current[index] = el }}/* index=> 0번째를 움직여라 1번째를 움직여라 라고 el을 index에 넣기 article자체를 순서에 맞게 집어넣겠다. */
                        >
                            {/* sectionRef.current=[<article/>,<article/>,<article/>,<article/>] 이런식으로 들어갈 것이다 */}
                            {/* <span className="num">{ project.num }</span>
                            <a href={project.view} target="_black" className="img"
                                rel='noreferrer noopener'
                            >
                                <img src={project.img} alt='' />
                            </a> */}{/* _black 새창열기 */}
                            <h3 className="title">{ project.title }</h3>
                            <p className="date">{project.date}</p>
                            <p className="sub">{project.sub}</p>
                            <p className="desc">{ project.desc[0] }</p>
                            <p className="desc">{ project.desc[1] }</p>
                            <p className="desc">{ project.desc[2] }</p>
                            <p className="type">{project.type}</p>
                            <div className="views">
                                <a href={project.code} target='_black' className="pj" rel='noreferrer noopener'>
                                CODE
                                </a>
                                <a href={project.demo} target='_black' className="pj" rel='noreferrer noopener'>
                                    DEMO
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;