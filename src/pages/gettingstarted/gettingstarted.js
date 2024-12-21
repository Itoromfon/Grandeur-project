import React, { useEffect, useState, useRef } from "react";
import { X, CheckCircle2 } from "lucide-react";
import styles from "./gettingstart.module.css";
import Image from "next/image";
import {
  FaLightbulb,
  FaCamera,
  FaDoorOpen,
  FaHandPointUp,
} from "react-icons/fa";
import { MdEdgesensorHigh } from "react-icons/md";
import gsap from "gsap";

const apps = [
  {
    id: 1,
    name: "Light Bulb",
    icon: (
      <FaLightbulb className="bg-black text-white w-10 h-10 p-2.5 rounded-sm" />
    ),
    images: "/storyblocklightbulb.gif",
    lineClass: styles.line1,
  },
  {
    id: 2,
    name: "Security Camera",
    icon: (
      <FaCamera className="bg-black text-white w-10 h-10 p-2.5 rounded-sm" />
    ),
    images: "/storyblockcamera.gif",
    lineClass: styles.line2,
  },
  {
    id: 3,
    name: "Door-Lock",
    icon: (
      <FaDoorOpen className="bg-black text-white w-10 h-10 p-2.5 rounded-sm" />
    ),
    images: "/storyblockdooropen.gif",
    lineClass: styles.line3,
  },
  {
    id: 4,
    name: "Smart Sensor",
    icon: (
      <MdEdgesensorHigh className="bg-black text-white w-10 h-10 p-2.5 rounded-sm" />
    ),
    images: "/storyblocksensor.gif",
    lineClass: styles.line4,
  },
];

const SmartAppAnimation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeId, setActiveId] = useState(apps[0].id);
  const [clickedIcons, setClickedIcons] = useState([]);
  const [showSingleIcon, setShowSingleIcon] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showX, setShowX] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  // Refs for GSAP animations
  const iconsContainerRef = useRef(null);
  const xIconRef = useRef(null);
  const singleIconRef = useRef(null);
  const checkmarkRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;
    let videoCycleInterval;

    const animateIconActive = (id) => {
      const iconElement = document.querySelector(`[data-icon-id="${id}"]`);
      if (iconElement) {
        gsap.to(iconElement, {
          scale: 1.1,
          duration: 0.3,
          ease: "back.out(1.7)",
          onComplete: () => {
            gsap.to(iconElement, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          },
        });
      }
    };

    // Function to cycle videos
    const startVideoCycle = () => {
      videoCycleInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % apps.length;
        setActiveId(apps[currentIndex].id);
        setSelectedImage(apps[currentIndex].images);
      }, 4000);
    };

    const autoCycle = setInterval(() => {
      if (currentIndex === 3) {
        setIsCompleted(true);
        setShowX(true);
        clearInterval(autoCycle);

        // Animate icons container
        gsap.to(iconsContainerRef.current, {
          opacity: 0.5,
          scale: 0.95,
          duration: 0.5,
          ease: "power2.inOut",
        });

        // Animate X appearance
        gsap.fromTo(
          xIconRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          }
        );

        timeoutId = setTimeout(() => {
          // Fade out icons and X
          gsap.to([iconsContainerRef.current, xIconRef.current], {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              setShowX(false);
              setShowSingleIcon(true);
              setShowCheckmark(true);

              // Animate single icon and checkmark appearance
              gsap.fromTo(
                singleIconRef.current,
                { scale: 0, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.8,
                  ease: "elastic.out(1, 0.5)",
                }
              );

              gsap.fromTo(
                checkmarkRef.current,
                { scale: 0, opacity: 0, y: -20 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.5,
                  delay: 0.3,
                  ease: "back.out(1.7)",
                  onComplete: () => {
                    // Add a subtle bounce every few seconds
                    gsap.to(checkmarkRef.current, {
                      y: -10,
                      duration: 0.5,
                      ease: "power2.out",
                      yoyo: true,
                      repeat: -1,
                      repeatDelay: 1,
                    });
                  },
                }
              );

              // Start cycling videos after transition is complete
              startVideoCycle();
            },
          });
        }, 2000);
      } else {
        currentIndex = (currentIndex + 1) % apps.length;
        setActiveId(apps[currentIndex].id);
        setSelectedImage(apps[currentIndex].images);
        animateIconActive(apps[currentIndex].id);
      }
    }, 5000);

    return () => {
      clearInterval(autoCycle);
      clearInterval(videoCycleInterval);
      if (timeoutId) clearTimeout(timeoutId);
      gsap.killTweensOf(checkmarkRef.current);
    };
  }, []);

  const handleIconClick = (id, images) => {
    if (!clickedIcons.includes(id)) {
      setClickedIcons((prev) => [...prev, id]);
    }
    setActiveId(id);
    setSelectedImage(images);
  };

  const handleSingleIconClick = () => {
    const nextId = activeId === apps.length ? 1 : activeId + 1;
    const nextApp = apps.find((app) => app.id === nextId);
    if (nextApp) {
      setActiveId(nextId);
      setSelectedImage(nextApp.images);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.Apps} relative`}>
        <div ref={iconsContainerRef}>
          {!showSingleIcon &&
            apps.map((item) => (
              <div
                key={item.id}
                data-icon-id={item.id}
                onClick={() => handleIconClick(item.id, item.images)}
              >
                <a href="#" className={styles.lightlink}>
                  {item.icon}
                  {activeId === item.id && !isCompleted && (
                    <FaHandPointUp className={`${styles.handIcon}`} />
                  )}
                  <p className={styles.name}>{item.name}</p>
                </a>
              </div>
            ))}
        </div>

        {showX && (
          <X
            ref={xIconRef}
            size={70}
            className={
              "absolute text-red-500 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2"
            }
          />
        )}

        {showSingleIcon && (
          <div className="relative mr-28 mt-[40px]">
            <div
              ref={singleIconRef}
              className={`${styles.lightbulb} ${styles.singleIcon}`}
              onClick={handleSingleIconClick}
            >
              <a href="#" className={styles.lightlink}>
                <div className={styles.controller}>
                  <Image
                    src="/grandeurlogos.svg"
                    width={100}
                    height={100}
                    alt="Grandeur's logo"
                  />
                </div>
              </a>
            </div>
            {showCheckmark && (
              <CheckCircle2
                ref={checkmarkRef}
                size={70}
                className="absolute ml-[40px] text-green-500 top-1/2 left-[85%] transform -translate-x-1/2"
              />
            )}
          </div>
        )}
      </div>

      <div>
        <div className={styles.smartphone}>
          <Image
            src="/smartapphone.jpg"
            width={260}
            height={410}
            alt="SmartApp Mobile"
            className={styles.smartappimg}
          />
          <div className="ml-[15px] mt-[-280px]">
            <div className="flex ml-[10px] gap-2">
              <div className="z-40 cursor-pointer">
                <Image
                  src="/fotordoor.png"
                  alt="Light"
                  width={100}
                  height={100}
                />
              </div>
              <div className="z-40 cursor-pointer">
                <Image
                  src="/fotorsensor.png"
                  alt="Light"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex ml-[-10px] mt-[30px] gap-14">
              <div className="z-40 cursor-pointer">
                <Image
                  src="/fotorcamera.png"
                  alt="Light"
                  width={100}
                  height={100}
                />
              </div>
              <div className="z-40 cursor-pointer">
                <Image
                  src="/fotorlight.png"
                  alt="Light"
                  width={70}
                  height={50}
                />
              </div>
            </div>
          </div>
          {selectedImage && (
            <Image
              src={selectedImage}
              width={150}
              height={150}
              alt="Selected Display"
              className={styles.overlayImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartAppAnimation;
