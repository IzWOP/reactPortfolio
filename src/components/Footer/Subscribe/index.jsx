import React,{useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
// stylesheets
import './index.scss';

const emailSchema = yup.object({
    to_name: yup.string().required('Please enter name'),
    email: yup.string().email().required('Email is required'),
    subject: yup.string(),
    message: yup.string().required('Please enter a message')
    });

const Subscribe = () => {
    const [subscribeStatus,
        setStatus] = useState({email_status: null})
    const [emailResult,
        setResult] = useState({email_result: null})
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(emailSchema)
    });

    const onSubmitEmail =  async (body) => {
        // e.preventDefault();
        let form = {body}
        let submitButton = document.querySelector('.submit');
        submitButton.classList.add = 'pending';

        setTimeout(() => {
            submitButton.classList.remove="pending";
            submitButton.classList.add = 'complete'
    }, 3000);

        // return await emailjs.send('service_gcqpzyh', 'template_tfuqnxf', form.body, 'user_Qp9GHgtVL7D2S3V30dYlK')
        //   .then((result) => {
        //       if (result.text == 'OK') {
        //           let text= result.text
        //           setStatus({email_status: text})
        //       }
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        console.log(form.body);
    }
    //setting the status to notify the user if email subscription succeeded
    // useEffect(() => {
    //     switch (subscribeStatus.email_status) {
    //         case 'OK':
    //             console.log('worked');
    //             break;
    //         default:
    //             //setting the state just another fallback
    //             setStatus({email_status: null});
    //             break;
    //     }
    // }, [emailResult]);

    return (
        <section className='send_email'>
            <div className='background'></div>
            <div className="container">
                <h5
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out-cubic">
                    Get in Touch
                </h5>
                <div className="separator-container">
                    <div className="separator line-separator">⌘</div>
                </div>
                <p>Would you want to talk about something?
                    <br/>Just send me your message and I will happily chat</p>
                <form
                id="contact"
                    onSubmit={handleSubmit(onSubmitEmail)}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out-cubic">
                        <div className="form-top">
                            <input
                                className='form-item'
                                placeholder="Full name"
                                name="to_name"
                                {...register("to_name")}/>
                                {errors.to_name && <p>{errors.to_name.message}</p>}
                            <input
                                className='form-item'
                                name="email"
                                placeholder="Email"
                                {...register("email",{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"})}/> 
                                {errors.email && <p>{errors.email.message}</p>}
                            <input
                                className='form-item'
                                name="subject"
                                placeholder="Subject"
                                {...register("subject")}/>
                                {errors.subject && <p>{errors.subject.message}</p>}
                                
                    </div>
                    <div className="form-bottom">
                        <textarea
                            className='form-item'
                            placeholder="Message"
                            name="message"
                            {...register("message")}/>
                            {errors.message && <p>{errors.message.message}</p>}
                    </div>
                    <button className='submit' type="submit" value="Submitt"></button>
                </form>

            </div>
        </section>
    )
}

export default Subscribe;
