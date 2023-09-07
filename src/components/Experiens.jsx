import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../style"

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from '../utils/motion'

const ExperiensCard = ({ experience }) => (
  <VerticalTimelineElement
  date={experience.date}
  iconStyle={{ background: experience.iconBg }}
  contentArrowStyle={{ borderRight: "7px solid #232631" }}
  contentStyle={{ background: "#1d1836", color: "#fff" }} 
      icon={<div className='flex justify-center items-center w-full h-full' ><img src={experience.icon} className='w-[60%] h-[60%] object-contain' alt="" /></div>} >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
      {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2' >
      {experience.points.map((point,index) => (
        <li key={`experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider' >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
function Experiens() {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText} >
          Work Experince.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperiensCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experiens, "work")