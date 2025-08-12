
function Footer(){
    return(
        <footer id='footer'>
            <div className="footer_inner">
                <h2 className="footer_text"> 감사합니다. </h2>
                {/* <strong> 감사합니다. </strong> */}
                <div className="footer_info">
                    &copy; Copyright 2025 boram. Web Frontend developer portfolio<br/>
                    이 사이트는 리액트를 사용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer;