import React from 'react'
import {motion} from "framer-motion"
import {styles} from "../style"
import { staggerContainer } from '../utils/motion'
const SectionWrapper =(Component ,idName) =>
function HOC() {
    return (
        <motion.section className={`${styles.padding} max-w-7x1 mx-auto relative z-0`} variants={staggerContainer()}
        initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}}>
         <span className='hash-span' id={idName} >
         </span>
            <Component id={idName}/>
        </motion.section>
    )
}


export default SectionWrapper