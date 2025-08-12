import { Mail } from 'lucide-react';

function Contact(){
    return(
        <section id='contact'>
            <div className="contact_inner">
                <div className="contact_text">
                    <a href="mailto:qhfka0090@naver.com" className="mail">
                        <Mail className="mail-icon"/>
                        <h2 className="contact_title"> Contact Me </h2>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;