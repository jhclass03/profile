


function Profile(){
    return(
        <section id='profile'>
        <div className="profile_inner">
            <h2 className="profile_title">
                About Me <em> </em>
            </h2>
            <div className="profile_desc">
{/*                 {
                    profileText.map((about,index)=>(
                        <div key={index}>
                            <span> { index + 1 } </span>
                            <h3> { about.title } </h3>
                            <p> { about.desc } </p>
                        </div>
                    ))
                } */}
            </div>
        </div>
        </section>
    )
}

export default Profile;