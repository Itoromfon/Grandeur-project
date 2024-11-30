import React, { useCallback, useEffect } from 'react';
import { ReactFlow,ReactFlowProvider, useNodesState, useEdgesState, addEdge, Background, Controls, useReactFlow } from 'reactflow';
import InkEdge from './InkEdge';
import 'reactflow/dist/style.css';
import styles from './FlowDiagram2.module.css';
import { RiAlertFill } from "react-icons/ri";
import { GiMovementSensor } from "react-icons/gi";
import Image from 'next/image';
import AutomateSmart from '../automatesmart/AutomateSmart';
import { FaStaffSnake } from "react-icons/fa6";
import { LuMoveDown } from "react-icons/lu";
import { LuMoveDownLeft } from "react-icons/lu";
import { LuMoveDownRight } from "react-icons/lu";

const FlowDiagram2 = () => {
  return (
    <div className={styles.divmain}>
        <div className={styles.autosmart}>
            <AutomateSmart />
        </div>
        <div className={styles.seendown}>
        <div className={styles.divmain2}>
        <div className={styles.divss}>
        <div className={styles.div1}>
            <div className={styles.staffsnakediv}>
                <FaStaffSnake className={styles.staffsnake} />
            </div>
            <div>
                <p className={styles.ptext1}>Enable Traveller Mode</p>
            </div>
        </div>
        </div>
        <div className={styles.seenflowdivs}>
            <Image 
                src='/airac.png'
                alt='air'
                width={125}
                height={150}
                className={styles.seenflowimages}
            />
        </div>
        </div>
        <div className={styles.lumovedivs}>
            <LuMoveDown className={styles.lumoves} />
        </div>
        <div className={styles.div2}>
            <div className={styles.staffsnakediv2}>
                <Image 
                    src='/warningalert.png'
                    alt='warning alert'
                    width={24}
                    height={24}
                />
            </div>
            <div>
                <p className={styles.ptext2}>Set humidity to 40%-60%</p>
            </div>
        </div>
        <div className={styles.arrows}>
        <div className={styles.lumoveleftdiv}>
            <LuMoveDownLeft className={styles.lumoveleft} />
        </div>
        <div className={styles.lumovediv2}>
            <LuMoveDown className={styles.lumove2} />
        </div>
        <div className={styles.lumoveright}>
            <LuMoveDownRight className={styles.lumoveright} />
        </div>
        </div>
        <div className={styles.div3mains}>
        <div className={styles.div3}>
            <div className={styles.staffsnakediv3}>
                <Image 
                    src='/doormart.png'
                    alt='Door mart'
                    width={80}
                    height={154}
                    className={styles.doorimg}
                />
            </div>
            <div>
                <p className={styles.ptext3}>Sensors Check Air Quality levels</p>
            </div>
        </div>
        <div className={styles.lumovediv3}>
            <LuMoveDown className={styles.lumove3} />
        </div>
        <div className={styles.div4}>
            <div className={styles.staffsnakediv4}>
                <Image 
                    src='/bulb.png'
                    alt='bulb'
                    width={184}
                    height={185}
                />
            </div>
            <div>
                <p className={styles.ptext4}>User receives App notofications</p>
            </div>
        </div>
        <div className={styles.lumovediv4}>
            <LuMoveDown className={styles.lumove4} />
        </div>
        <div className={styles.div5}>
            <div className={styles.staffsnakediv5}>
                <Image 
                    src='/trigger.png'
                    alt='trigger alarm'
                    width={90}
                    height={144}
                />
            </div>
            <div>
                <p className={styles.ptext5}>User deactivate travellers mode.</p>
            </div>
        </div>
        </div>
        <div className={styles.alertmain}>
        <div className={styles.alert1}>
        <div className={styles.alertdiv}>
            <Image 
                src='/alerticonss.png' 
                alt='Alert'
                width={32}
                height={32}
                className={styles.alertimg}
            />
        </div>
        <div>
            <div className={styles.alerth1div}>
                <h1 className={styles.alerth1}>Alert</h1>
            </div>
            <div className={styles.alertp1div}>
                <p className={styles.alertp1}>Send an immediate notification to the user, with a live feed from
                security cameras.</p>
            </div>
        </div>
        </div>
        <div className={styles.alert2}>
        <div className={styles.alertdiv2}>
            <Image 
                src='/callflow.png' 
                alt='Alert'
                width={32}
                height={32}
                className={styles.alertimg2}
            />
        </div>
        <div>
            <div className={styles.alerth2div}>
                <h1 className={styles.alerth2}>Follow-Up</h1>
            </div>
            <div className={styles.alertp2div}>
                <p className={styles.alertp2}>Send an immediate notification to the user, with a live feed from
                security cameras.</p>
            </div>
        </div>
        </div>
        </div> 
        </div>
    </div>
  );
};

export default FlowDiagram2;