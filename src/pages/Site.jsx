import { site } from "../contents/textdata";

function Site(){
    return(
        <section id='site'>
            <div className="site_inner">
                <h2 className="site_title">ARCHIVING</h2>
                <div className="site_wrap">
                    {
                        site.map((site,index)=>(
                            <div className="site-box" key={index}>
                                <a href={site.url} target="_black">
                                    <div className="title-box">
                                        <img src={site.img} alt={site.title} />
                                        <h3>{site.title}</h3>
                                    </div>
                                    <p className="sub">{site.sub}</p>
                                    <p className="desc">{site.desc}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Site;