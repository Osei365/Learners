import React from 'react';
import './Contact.css';
import 'boxicons/css/boxicons.min.css';


const Contact = () => {
    return (
        <div className="cnt">
            <section id="contact-details">
                <h1>Contact Us</h1>
                <p>Nunc molis sit amet elit at tempor. Maecenas scelerisque molestie.
                    mauris, sed lobortis risus consequat vitae.Donec gravida fermentum molestie.
                </p>
                <div className="contact">
                    <div className="address">
                        <h2>Our Address</h2>
                        <span>Duis mi nisi, interdum at metus vel, dignissim rhoncus  tellus. proin id nisi dul .
                            Nullam commodo ,olis eros, sed condiimentum.
                        </span>
                    </div>
                    <div className="Phone-number">
                        <h2>Contact us</h2>
                        <span>+444 0000 000 <i class='bx bx-copy'></i></span>
                        <span>oseiabodunrin@gmail.com <i class='bx bx-copy'></i></span>
                    </div>
                </div>
            </section>
            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Your E-mail" />
                    <input type="text" placeholder="Type Subject" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type a Message"></textarea>
                    <button className="normal">Submit</button>
                </form>
                
            </section>
        </div>
    );
};

export default Contact;
