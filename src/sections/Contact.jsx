import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  // Form Handling
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_far3vbp",
        "template_l72tete",
        {
          from_name: form.name,
          to_name: 'Akhil Verma',
          from_email: form.email,
          to_email: 'akhil01verma@gmail.com',
          message: form.message,
        },
        "ehddHTCp8iaIOAHE2",
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  // Animation


  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const inputTitleRefs = useRef([]);
  const inputRefs = useRef([]);
  const buttonRef = useRef(null);

  useGSAP(() => {
    if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: -100,
          duration: 2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 60%",
          },
        });
      }

      if (subTitleRef.current) {
        gsap.from(subTitleRef.current, {
          y: -10,
          duration: 0.6,
          repeat: 2,
          ease: "power1.inout",
          delay: 0.8,
          scrollTrigger: {
            trigger: subTitleRef.current,
            start: "top 80%",
          },
        });
      }

      if (inputTitleRefs.current.length > 0) {
        inputTitleRefs.current.forEach((el, index) => {
          if (el) { 
            gsap.from(el, {
              opacity: 0,
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
              },
            });
          }
        });
      }

      if (inputRefs.current.length > 0) {
        inputRefs.current.forEach((el, index) => {
          if (el) { 
            gsap.from(el, {
              y: -50,
              opacity: 0,
              duration: 1.5,
              scrollTrigger: {
                trigger: el,
                start: "top 70%",
              },
            });
          }
        });
      }

      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          y: -100,
          duration: 2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
          },
        });
      }


    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);


  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="border border-black-300 bg-black-200 rounded-l pt-8 pb-8 flex items-center justify-center flex-col">
        <div className="contact-container bg-gray">
          <h3 ref={titleRef} className="head-text">Let's talk</h3>
          <p ref={subTitleRef} className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7 mb-12 ">
            <label className="space-y-3">
              <span ref={(el) => (inputTitleRefs.current[0] = el)}  className="field-label">Full Name</span>
              <input
                ref={(el) => (inputRefs.current[0] = el)}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Akhil Verma"
              />
            </label>

            <label className="space-y-3">
              <span ref={(el) => (inputTitleRefs.current[1] = el)} className="field-label">Email address</span>
              <input
                ref={(el) => (inputRefs.current[1] = el)}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., akhil01verma@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span ref={(el) => (inputTitleRefs.current[2] = el)} className="field-label">Your message</span>
              <textarea
                ref={(el) => (inputRefs.current[2] = el)}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button ref={buttonRef} className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;