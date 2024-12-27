import React from "react";
import { Eye, Circle, Square } from "lucide-react"; // Import relevant icons
import styles from "./DoorControl.module.css";

const CamControl = () => {
  return (
    <div className={`p-4 mt-[-420px] ml-[-21px] w-[250px] bg-white rounded-xl ${styles.camControl}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Camera Control</h3>
      <div className={`${styles.cameraContainer}`}>
        {/* Simulated camera footage */}
        <video
          className={styles.cameraFootage}
          src="/doorzoom.mp4"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-around mt-4">
        {/* View Live Button */}
        <button className="bg-green-600 text-white p-2 rounded-full shadow">
          <Eye size={24} color="white" />
        </button>
        {/* Record Button */}
        <button className="bg-gray-400 text-white p-2 rounded-full shadow">
          <Circle size={24} color="white" />
        </button>
        {/* Stop Button */}
        <button className="bg-red-600 text-white p-2 rounded-full shadow">
          <Square size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default CamControl;







{/* <div className="flex justify-around mt-4">
   
    <button className="bg-green-600 text-white p-2 rounded-full shadow">
        <Unlock size={24} color="white" />
    </button>
  
    <button className="bg-red-600 text-white p-2 rounded-full shadow">
        <DoorClosed size={24} color="white" />
    </button>

    <button className="bg-gray-400 text-white p-2 rounded-full shadow">
        <Key size={24} color="white" />
    </button>
</div> */}

