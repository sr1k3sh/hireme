import React, {useRef} from "react";
import emailjs from "emailjs-com";
import Header from "./Header";
import Button from "./Button";
export default function GetEmail(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(emailjs)
        emailjs.sendForm('service_auggyas', 'template_kjk4x6i', form.current, 'user_WoPhaiHl0RnnZB4OewVZG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <React.Fragment>
            <section className="container-fluid getmail__container">
                <div className="col-xl-6 m-auto getmail__wrapper">
                    <form className="getmail__form" ref={form} onSubmit={sendEmail}>
                        <Header title="Sweet, that's me! Now it's your turn to say hi."></Header>
                        <div>
                            <label className="form-label">Name</label>
                            <input className="form-control" type="text" placeholder="Enter your name" name="from_name" />
                        </div>
                        <div>
                            <label className="form-label">Email</label>
                            <input className="form-control" type="email" placeholder="Your email address" name="user_email" />
                        </div>
                        <div>
                            <label className="form-label">Message</label>
                            <textarea className="form-control" name="message" placeholder="Message you want to share"/>
                        </div>

                        <Button btnText='HIRE ME' ></Button>

                        <div>
                            <span>or, send Email to </span><a href = "mailto: sr1k3sh@gmail.com">sr1k3sh@gmail.com</a>
                        </div>
                        
                    </form>
                </div>
            </section>
        </React.Fragment>
    )
}