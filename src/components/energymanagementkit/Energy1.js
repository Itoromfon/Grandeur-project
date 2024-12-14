import React, { useCallback, useEffect } from 'react';
import { ReactFlow,ReactFlowProvider, useNodesState, useEdgesState, addEdge, Background, Controls, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';
import styles from './Energy1.module.css';
import { RiAlertFill } from "react-icons/ri";
import { GiMovementSensor } from "react-icons/gi";
import Image from 'next/image';
import AutomateSmart from '../automatesmart/AutomateSmart';
import { FaStaffSnake } from "react-icons/fa6";
import { LuMoveDown } from "react-icons/lu";
import { LuMoveDownLeft } from "react-icons/lu";
import { LuMoveDownRight } from "react-icons/lu";
import Link from 'next/link';
import { GrFormNext } from "react-icons/gr";

const Energy1 = () => {
  return (
    // <div className="flex justify-center items-center">
    <div className={styles.divmain}>
        <div className={styles.autosmart}>
            <div>
                <h1 className={styles.htext}>Energy Management Kit</h1>
            </div>
            <div>
                <p className={styles.ptext}>Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day</p>
                <Link  href="/product">
                <div className={styles.buttoncontainer}>
                    <div className={styles.buttontext}>
                    View Security & Safety Insights <GrFormNext className={styles.next} />
                    </div>
                </div>
                </Link>
            </div> 
        </div>
        <div>
           <Image 
                src='/variouskits.svg'
                width={494}
                height={273}
                alt='kits'
           /> 
        </div>
    </div>
    // </div>
  );
};

export default Energy1;