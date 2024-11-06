import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FramerMotion.module.css'

function FramerMotion() {
  return (
    <> 
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 15 }}
            exist={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
        >
        <div>FramerMotion</div>
        </motion.div>
    </AnimatePresence>
    </>
  )
}

export default FramerMotion