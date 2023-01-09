import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "common/theme/charity";
import ResetCSS from "common/assets/css/style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Charity/Navbar";
import DrawerSection from "containers/Charity/DrawerSection";
import Footer from "containers/Charity/Footer";
import styles from "../../styles/contactus.module.css";
import {TiLocationOutline} from 'react-icons/Ti'; 
import {FiMail} from 'react-icons/Fi';
import {BiPhoneCall} from 'react-icons/Bi';
import {
    GlobalStyle,
    CharityWrapper,
    ContentWrapper,
} from "containers/Charity/charity.style";

const contactus = () => {
    const initialValues = { username: "", email: "", subject: "", message:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    const handleSubmit = (e) => {
    e.preventDefault();
    if(setFormErrors(validate(formValues)))
        return;
    setIsSubmit(true);
    };
    
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
          setFormValues(initialValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if(!values.subject)
        {
            errors.subject = "Subject is Required";
        }
        if(!values.message)
        {
            errors.message = "Message is Required";
        }
        return errors;
    };

    return (
        <ThemeProvider theme={charityTheme}>
            <Fragment>
                {/* Start charity head section */}
                <Head>
                    <title>
                        Shine NGO | A Non Government Organization Based at Gorakhpur
                    </title>
                    <meta
                        name="Description"
                        content="e are not for profit organisation with our office based at Gorakhpur, Uttar pradesh. We work for better education in the early stage(class 1-3) in Rural villages. We have two Education hut at Shankrapur and Adarsh nagar (Gorakhpur). "
                    />
                    <meta name="theme-color" content="#FCF22B" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    {/* Load google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                      <link href="assets/img/logos.png" rel="icon" />
                        <link href="assets/img/logos.png" rel="apple-touch-icon"></link>
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />

                </Head>
                <ResetCSS />
                <GlobalStyle />
                {/* End of charity head section */}
                {/* Start charity wrapper section */}
                <CharityWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <Navbar />
                    </Sticky>
                    <DrawerProvider>
                        <DrawerSection />
                    </DrawerProvider>
                    <ContentWrapper>
                    </ContentWrapper>
                    <div className={styles.boxMap}>
                    <div className={styles.joinBtnDiv}>
      <center>
      
        <a href="https://forms.gle/ybtU3ZYLuUZ6Da3UA" className={styles.joinBtn} target="_blank">Join Us</a>
      </center>
    </div>  
                        <div className={styles.bodyStart}>
                            <section className={styles.container}>
                                <header>Contact Us</header>
                                <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputbox}>
                                    {/* <label>Name</label> */}
                                    <input
                                    type="text"
                                    name="username"
                                    placeholder="Name"
                                    value = {formValues.username}
                                    onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.username}</p>
                                <div className={styles.inputbox}>
                                    {/* <label>Email</label> */}
                                    <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.email}</p>
                                <div className={styles.inputbox}>
                                    {/* <label>Subject</label> */}
                                    <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formValues.subject}
                                    onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.subject}</p>
                                <div className={styles.inputbox}>
                                    {/* <label>Message</label> */}
                                    <textarea
                                    className={styles.messagebox}
                                    type="text"
                                    name="message"
                                    placeholder="Message"
                                    value={formValues.message}
                                    onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.message}</p>
                                <button>Submit</button>
                                </form>                        
                            </section>
                            <section className={styles.addEmailCall}>
                                <div className={styles.addressContainer}>
                                    <TiLocationOutline className={styles.addIcon}/>                                
                                    <h4>
                                        Our Address
                                    </h4>
                                    <p>Maharajganj Chauraha, Post-Parmeshwarpur, Gorakhpur, Uttar Pradesh, 273007</p>
                                </div>
                                <div className={styles.emailCall}>
                                    <div className={styles.email}>
                                        <FiMail className={styles.addIcon}/>
                                        <h4>Email Us</h4>
                                        <p>shinengoindia@gmail.com</p>
                                    </div>
                                    <div className={styles.call}>
                                        <BiPhoneCall className={styles.addIcon}/>
                                        <h4>Call Us</h4>
                                        <p>+91 84002 55888</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={styles.map}>
                            <iframe className={styles.iframeClass} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14233.583050738223!2d83.3606844!3d26.8909322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x745c5bd276fcac23!2sShine%20NGO!5e0!3m2!1sen!2sin!4v1633019463634!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>

                    <Footer />
                </CharityWrapper>
                {/* End of charity wrapper section */}
            </Fragment>
        </ThemeProvider>
    );
};
export default contactus;
