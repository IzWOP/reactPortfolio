// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import emailjs from "emailjs-com";
import React from "react";
import { InlineWidget } from "react-calendly";
// stylesheets
import "./index.scss";

// const emailSchema = yup.object({
//   to_name: yup.string().required("Please enter name"),
//   email: yup.string().email().required("Email is required"),
//   subject: yup.string(),
//   message: yup.string().required("Please enter a message"),
// });

const Subscribe = () => {
//   const [emailStatus, setStatus] = useState({ email_status: null });
//   const [emailResult, setResult] = useState({ email_result: null });
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(emailSchema) });

//   let button = document.querySelector(".submit");
//   const onSubmitEmail = async (body) => {
//     // e.preventDefault();
//     window.dataLayer.push({
//       event: "formSubmit",
//     });
//     let form = {
//       body,
//     };
//     window.dataLayer.push({
//       event: "formClick",
//     });
//     return await emailjs
//       .send(
//         "service_gcqpzyh",
//         "template_tfuqnxf",
//         form.body,
//         "user_Qp9GHgtVL7D2S3V30dYlK"
//       )
//       .then(
//         (result) => {
//           if (result.text === "OK") {
//             let text = result.text;
//             button.classList.add("pending");
//             setTimeout(() => {
//               setStatus({ email_status: text });
//               button.classList.remove("pending");
//               button.classList.add("complete");
//             }, 3000);
//           }
//         },
//         (error) => {
//           setStatus({ email_status: "err" });
//           button.classList.add("pending");
//           setTimeout(() => {
//             button.classList.remove("pending");
//             button.classList.add("errors");
//           }, 3000);
//         }
//       );
//     // console.log(form.body);
//   };
  //setting the status to notify the user if email subscription succeeded
//   useEffect(() => {
//     switch (emailStatus.email_status) {
//       case "OK":
//         window.dataLayer.push({
//           event: "formSubmit",
//         });
//         setResult({ email_result: "Email was sent!" });
//         reset();
//         break;
//       case "err":
//         window.dataLayer.push({
//           event: "formFail",
//         });
//         setResult({ email_status: null });
//         break;
//       default:
//         //setting the state just another fallback
//         setResult({ email_status: null });
//         break;
//     }
//   }, [emailStatus, reset]);

  return (
    <section className="send_email"  id="contact">
      <div className="background"></div>
      <div className="container">
        <h3
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
        >
          Get in Touch
        </h3>
        <div className="separator-container">
          <div className="separator line-separator">⌘</div>
        </div>
        <InlineWidget url="https://calendly.com/isaachv/1on1" />
        
        {/* <h6  data-aos="fade-up"
                data-aos-delay="500"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out-cubic">Would you want to talk about something?
                    <br/>Just send me your message and I will happily chat</h6>
                <form
                    id="contact"
                    onSubmit={handleSubmit(onSubmitEmail)}
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out-cubic">
                    <div className="form-top">
                        <div className='form-item'>
                            <input placeholder="Full name" name="to_name" {...register("to_name")}/> {errors.to_name && <p className='err name'>{errors.to_name.message}</p>}
                        </div>
                        <div className='form-item'>

                            <input
                                className='form-item'
                                name="email"
                                placeholder="Email"
                                {...register("email",{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"})}/> {errors.email && <p className='err message'>{errors.email.message}</p>}
                        </div>
                        <div className='form-item'>
                            

                            <input
                                name="subject"
                                placeholder="Subject"
                                {...register("subject")}/>
                            
                        </div>

                    </div>
                    <div className="form-bottom">
                        <div className='form-item'>
                        <textarea
                            
                            placeholder="Message"
                            name="message"
                            {...register("message")}/> {errors.message && <p className='error message'>{errors.message.message}</p>}
                        </div>
                    </div>
                    <button className='submit' type="submit" value="Submitt"></button>
                    {emailResult.result !== null && <div className='email-status'>
                        {emailResult.email_result}
                    </div>}
                </form> */}
      </div>
    </section>
  );
};

export default Subscribe;
