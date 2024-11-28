import React, { useCallback, useEffect } from 'react';
import { ReactFlow,ReactFlowProvider, useNodesState, useEdgesState, addEdge, Background, Controls, useReactFlow } from 'reactflow';
import InkEdge from './InkEdge';
import 'reactflow/dist/style.css';
import styles from './FlowDiagram.module.css';
import { RiAlertFill } from "react-icons/ri";
import { GiMovementSensor } from "react-icons/gi";
import AutomateSmart from '../automatesmart/AutomateSmart';
import Image from 'next/image';

// Define initial nodes with the fifth node
const initialNodes = [
{ 
    id: '1', 
    position: { x: 250, y: 5 }, 
    data: {
        label: (
        <div className={styles.nodediv1}>
          <div className={styles.filldiv}>
            <GiMovementSensor className={styles.fill} />
          </div>
          <div className={styles.nodetextdiv}>
            <p className={styles.nodetext}>Unusual Movement Detected!</p>
          </div>
          </div>
        ),
      },
    // style: {
    //     backkgroundColor: 'lightblue', 
    //     color: 'black',
    //     border: '1px solid gray'
    // }
    className: styles.node1,
},
{ 
    id: '2', position: { x: 250, y: 150 }, 
    data: {
        label: (
        <div className={styles.nodediv2}>
          <div className={styles.filldiv2}>
            {/* <RiAlertFill className={styles.fill2} /> */}
            <Image 
                src='/clippath.png'
                alt='clip path'
                width={24}
                height={24}
            />
          </div>
          <div className={styles.nodetextdiv2}>
            <p className={styles.nodetext2}>Theft Prevention Mode Activated</p>
          </div>
          </div>
        ),
      },
    className: styles.node2,
},
{ 
    id: '3', 
    position: { x: 100, y: 400 }, 
    data: {
        label: (
        <div className={styles.nodediv3}>
          <div className={styles.filldiv3}>
            {/* <RiAlertFill className={styles.fill2} /> */}
            <Image 
                src='/removebg.png'
                alt='clip path'
                width={184}
                height={185}
            />
          </div>
          <div className={styles.nodetextdiv3}>
            <p className={styles.nodetext3}>Turn On All Lights</p>
          </div>
          </div>
        ),
      },
    className: styles.node3,
},
{ 
    id: '4', 
    position: { x: 250, y: 550 },
    data: {
        label: (
        <div className={styles.nodediv4}>
          <div className={styles.filldiv4}>
            {/* <RiAlertFill className={styles.fill2} /> */}
            <Image 
                src='/doormart.png'
                alt='clip path'
                width={99}
                height={144}
            />
          </div>
          <div className={styles.nodetextdiv4}>
            <p className={styles.nodetext4}>Lock All Doors</p>
          </div>
          </div>
        ),
      },
      className: styles.node4,
},
{ 
    id: '5', 
    position: { x: 400, y: 700 }, 
    data: {
        label: (
        <div className={styles.nodediv5}>
          <div className={styles.filldiv5}>
            {/* <RiAlertFill className={styles.fill2} /> */}
            <Image 
                src='/trigger.png'
                alt='clip path'
                width={99}
                height={144}
            />
          </div>
          <div className={styles.nodetextdiv5}>
            <p className={styles.nodetext5}>Lock All Doors</p>
          </div>
          </div>
        ),
      }, 
      className: styles.node5,
    }, 
];

// Define edges including the fifth node
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'ink' },
  { id: 'e2-3', source: '2', target: '3', type: 'ink' },
  { id: 'e3-4', source: '3', target: '4', type: 'ink' },
  { id: 'e4-5', source: '4', target: '5', type: 'ink' }, // New edge connecting to Node 5
];

const FlowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { fitView } = useReactFlow();

  const edgeTypes = { ink: InkEdge };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'ink' }, eds)),
    [setEdges]
  );

  // Log nodes state for debugging
  useEffect(() => {
    console.log("Nodes state has been updated:", nodes);
    fitView({ padding: 0.2 });
  }, [fitView, nodes, edges]);

//   const edgeTypes = { ink: InkEdge };

  return (
    <div className={styles.main}>
        <AutomateSmart />
    <div className={styles.main1}>
    <div className={styles.mains}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        className={styles.reactflow}
      >
        <Background gap={12} size={1} />
        {/* <Controls /> */}
      </ReactFlow>
      {/* <div className={styles.seenflowdiv}>
            <Image 
                src='/seenflow.png'
                alt='Flow'
                width={206}
                height={206}
            />
      </div> */}
    </div>
    <div className={styles.alertmain}>
    <div className={styles.alert1}>
    <div className={styles.alertdiv}>
        <Image 
            src='/alert.png' 
            alt='Alert'
            width={32}
            height={32}
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

export default FlowDiagram;

























































































































































/* .main {
    display: flex;
    background-color: red;
} */

    // .main1 {
    //     display: flex;
    //     flex-direction: column;
    // }
    
    /* .reactflow {
        z-index: 10;
    } */
    
    // .mains {
    //     display: flex;
    //     margin: 70px 0;
    //     width: 100vw;
    //     height: 100vh;
    // }
    
    // /* .seenflowdiv {
    //     margin-left: -350px;
    // } */
    
    // @keyframes inkFlow {
    //   0% {
    //     stroke-dasharray: 0, 200;
    //     stroke-dashoffset: 0;
    //   }
    //   100% {
    //     stroke-dasharray: 200, 200;
    //     stroke-dashoffset: -200;
    //   }
    // }
    
    // .node1 {
    // background-color: #FFFFFF;
    // color: #000000;
    // border: 1px solid #FFFFFF;
    // border-radius: 10px;
    // width: 280px;
    // height: 40px;
    // padding: 33px 0;
    // font-size: 14px;
    // display: flex;
    // }
    
    //   .nodediv1 {
    //     margin: auto;
    //     display: flex;
    //   }
    
    //   .filldiv {
    //     background: #5C755E;
    //     padding: 5px 5px;
    //     border-radius: 50%;
    //     margin-top: -15px;
    //     margin-right: 5px;
    //   }
    
    //   .fill {
    //     margin-top: 0;
    //     margin-right: 10px;
    //     color: #FFFFFF;
    //     font-size: 25px;
    //     margin: auto;
    //   }
    
    //   .nodetextdiv {
    //     margin-top: -7px;
    //   }
    
    //   .nodetext {
    //     text-align: center;
    //   }
    
    
    
    
    
    
    
    //   .nodediv2 {
    //     margin: auto;
    //     display: flex;
    //   }
    
    //   .filldiv2 {
    //     background: #FFFFFF;
    //     padding: 5px 5px;
    //     border-radius: 50%;
    //     margin-top: -15px;
    //     margin-right: 5px;
    //   }
    
    //   .fill2 {
    //     margin-top: 0;
    //     margin-right: 10px;
    //     color: yellowgreen;
    //     font-size: 25px;
    //     margin: auto;
    //   }
    
    //   .nodetextdiv2 {
    //     margin-top: -7px;
    //   }
    
    //   .nodetext2 {
    //     text-align: center;
    //   }
    
    //   .node2 {
    //     background-color: #A97D5D;
    //     color: #FFFFFF;
    //     border: 1px solid #A97D5D;
    //     border-radius: 10px;
    //     width: 280px;
    //     height: 40px;
    //     padding: 33px 0;
    //     font-size: 14px;
    //     display: flex;
    //   }
    
    
    
    
    
    //   .nodediv3 {
    //     margin: auto;
    //     display: flex;
    //   }
    
    //   .filldiv3 {
    //     padding: 5px 5px;
    //     margin-top: -75px;
    //     margin-right: 5px;
    //   }
    
    //   .fill3 {
    //     margin-top: 0;
    //     margin-right: 10px;
    //     color: yellowgreen;
    //     font-size: 25px;
    //     margin: auto;
    //   }
    
    //   .nodetextdiv3 {
    //     margin-top: -7px;
    //     width: 200px;
    //     margin-left: -50px;
    //   }
    
    //   .nodetext3 {
    //     text-align: center;
    //   }
    
    //   .node3 {
    //     background-color: #FFFFFF;
    //     color: #000000;
    //     border: 1px solid #FFFFFF;
    //     border-radius: 10px;
    //     width: 280px;
    //     height: 40px;
    //     padding: 33px 0;
    //     font-size: 14px;
    //     display: flex;
    //   }
    
    
    
    
    
    
    
    
    
    
    //   .nodediv4 {
    //     margin: auto;
    //     display: flex;
    //   }
    
    //   .filldiv4 {
    //     padding: 5px 5px;
    //     margin-top: -75px;
    //   }
    
    //   .fill4 {
    //     margin-top: 0;
    //     margin-right: 10px;
    //     color: yellowgreen;
    //     font-size: 25px;
    //     margin: auto;
    //   }
    
    //   .nodetextdiv4 {
    //     margin-top: -7px;
    //     margin-left: -30px;
    //   }
    
    //   .nodetext4 {
    //     text-align: center;
    //     width: 200px;
    //     /* padding-left: -20px; */
    //   }
    
    //   .node4 {
    //     background-color: #FFFFFF;
    //     color: #000000;
    //     border: 1px solid #FFFFFF;
    //     border-radius: 10px;
    //     width: 280px;
    //     height: 40px;
    //     padding: 33px 0;
    //     font-size: 14px;
    //     display: flex;
    //   }
    
      
    
    
    
    
    
    //   .nodediv5 {
    //     margin: auto;
    //     display: flex;
    //   }
    
    //   .filldiv5 {
    //     padding: 5px 5px;
    //     margin-top: -55px;
    //   }
    
    //   .fill5 {
    //     margin-top: 0;
    //     margin-right: 10px;
    //     color: yellowgreen;
    //     font-size: 25px;
    //     margin: auto;
    //   }
    
    //   .nodetextdiv5 {
    //     margin-top: -7px;
    //     margin-left: -30px;
    //   }
    
    //   .nodetext5 {
    //     text-align: center;
    //     width: 200px;
    //     /* padding-left: -20px; */
    //   }
    
    //   .node5 {
    //     background-color: #FFFFFF;
    //     color: #000000;
    //     border: 1px solid #FFFFFF;
    //     border-radius: 10px;
    //     width: 280px;
    //     height: 40px;
    //     padding: 33px 0;
    //     font-size: 14px;
    //     display: flex;
    //   }
    
    