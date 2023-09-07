import { React, useRef, useState } from 'react'
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from '../style';


function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {target} = e;
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_fe4981b',
      'template_r47q4y4',
      {
        from_name: form.name,
        to_name: "Rahmatillo",
        from_email: form.email,
        to_email: "rahmatillo722022@gmail.com",
        message: form.message,
      },
      '4gd1uuW4DX6Y10AB0'
    )

     .then(
        () => {
          setLoading(false);
         if (form.name && form.email && form.message) {
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        } else {
          alert("Ahh, something went wrong. Please try again.");
        }
        }
      );
  };
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black p-8 rounded-2xl' >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.heroHeadText} >
          Contact
        </h3>
        <form ref={formRef} onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4' >Your Name</span>
            <input type="text" name='name' value={form.value}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg
            outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4' >Your Email</span>
            <input type="email" name='email'
             value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg
            outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4' >Your message</span>
            <textarea
              rows="7"
              name='message'
              onChange={handleChange}
              value={form.message}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button type='submit' className='bg-slate-600
          py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")