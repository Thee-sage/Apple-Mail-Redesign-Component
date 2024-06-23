"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from "./page.module.css";
import { GoDotFill } from "react-icons/go";
import dummyEmails from './emails/page.jsx';
import { motion, AnimatePresence } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoTrash } from "react-icons/io5";
import { FaArchive } from "react-icons/fa";
import { RiFontSize } from "react-icons/ri";
import { TbTextScan2 } from "react-icons/tb";
import { PiShareFatFill } from "react-icons/pi";
import { BiSolidShare } from "react-icons/bi";

const ComponentName = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const searchInputRef = useRef(null);
    const dropdownRef = useRef(null);
    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);
    const [animationClass, setAnimationClass] = useState('');
    const [isStackVisible, setIsStackVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [firstClickIndex, setFirstClickIndex] = useState(null);

useEffect(() => {
  if (selectedEmailIndex !== null) {
    if (firstClickIndex === null) {
      setFirstClickIndex(selectedEmailIndex);
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }
  }
}, [selectedEmailIndex]);

const handleEmailClick = (index) => {
    if (index === selectedEmailIndex) return;
    setAnimationClass('hidden');
    setIsStackVisible(false);
    setTimeout(() => {
        setSelectedEmailIndex(index);
        setAnimationClass('stackBack');
        setTimeout(() => {
            setAnimationClass('stackFront');
            setIsStackVisible(false);
        }, 50);
    }, 500);
};

    const handleCloseEmail = () => {
        setSelectedEmailIndex(null);
        setAnimationClass('hidden');
        setIsStackVisible(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchFocus = () => {
        setIsSearchActive(true);
    };

    const handleSearchBlur = () => {
        if (searchQuery === "") {
            setIsSearchActive(false);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setDropdownVisible(false);
    };

    const filteredEmails = dummyEmails.filter(email => {
        const matchesSearchQuery = email.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            email.body.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory === "All" || email.category === selectedCategory;

        return matchesSearchQuery && matchesCategory;
    });

    const handleNextEmail = () => {
        setAnimationClass("slide-in-right");
        setTimeout(() => {
            setSelectedEmailIndex((prevIndex) => (prevIndex + 1) % filteredEmails.length);
            setAnimationClass("");
        }, 500);
        setIsStackVisible(true);
    };

    const handlePreviousEmail = () => {
        setAnimationClass("slide-in-left");
        setTimeout(() => {
            setSelectedEmailIndex((prevIndex) => (prevIndex - 1 + filteredEmails.length) % filteredEmails.length);
            setAnimationClass("");
        }, 500); 
        setIsStackVisible(true);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNextEmail,
        onSwipedRight: handlePreviousEmail,
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (selectedEmailIndex !== null) {
                if (event.key === "ArrowRight") {
                    handleNextEmail();
                } else if (event.key === "ArrowLeft") {
                    handlePreviousEmail();
                } else if (event.key === "Escape") {
                    handleCloseEmail();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedEmailIndex, filteredEmails.length]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const categoryColors = {
        "All": "#084d96",
        "Work": "#e4c98c",
        "Personal": "#a25860",
        "Promotion": "#52d2b2",
        "Social": "#FFA500", // orange
        "Notification": "#800080" // purple
    };

    const handleClose = () => {
        // here we could implement the closing the window same for below also in the next windows the red button is closing the email as its using close email button
        console.log('Close window');
    };

    const handleMinimize = () => {
        console.log('Minimize window');
    };

    const handleMaximize = () => {
        console.log('Maximize window');
    };

    const iconVariants = {
        hover: {
          scale: 1.2,
          color: '#000000',
          transition: {
            duration: 0.3,
            ease: 'easeInOut'
          }
        }
      };
      
      const iconContainerVariants = {
        hover: {
          color: '#888888',
          transition: {
            duration: 0.3,
            ease: 'easeInOut'
          }
        }
      };
    return (
        <div className={styles.main} {...swipeHandlers}>
            {selectedEmailIndex === null ? (
                <div className={styles.image}>
                    <img src="./cloud.jpg" className={styles.img} alt="Cloud" />
                    <div className={styles.whitebox}>
                        <div>
                            <div className={styles.dots}>
                                <motion.div
                                    className={styles.dot1}
                                    animate={isSearchActive ? { y: -10 } : { y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={handleClose}
                                >
                                    <GoDotFill />
                                </motion.div>
                                <motion.div
                                    className={styles.dot2}
                                    animate={isSearchActive ? { y: 10 } : { y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={handleMinimize}
                                >
                                    <GoDotFill />
                                </motion.div>
                                <motion.div
                                    className={styles.dot3}
                                    animate={isSearchActive ? { y: -10 } : { y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={handleMaximize}
                                >
                                    <GoDotFill />
                                </motion.div>
                                <AnimatePresence>
                                    {isSearchActive ? (
                                        <motion.input
                                            key="searchBar"
                                            animate={{ scale: 1, opacity: 1 }}
                                            initial={{ scale: 0, opacity: 0 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            type="text"
                                            placeholder="Search emails..."
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            onFocus={handleSearchFocus}
                                            onBlur={handleSearchBlur}
                                            ref={searchInputRef}
                                            className={styles.searchbar}
                                        />
                                    ) : (
                                        <motion.img
                                            key="searchIcon"
                                            src="./search.svg"
                                            className={styles.search}
                                            animate={{ scale: 1, opacity: 1 }}
                                            initial={{ scale: 0, opacity: 0 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => {
                                                setIsSearchActive(true);
                                                setTimeout(() => searchInputRef.current.focus(), 100); 
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className={styles.dropdownContainer} ref={dropdownRef}>
                                <button
                                    className={styles.dropdownButton}
                                    onClick={() => setDropdownVisible(!dropdownVisible)}
                                >
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", color: "#667F9B" }}>
                                        <div className={styles.selectedCategory}>
                                            <GoDotFill style={{ fontSize: "32px", padding: "0px 0px 0px 0px", color: categoryColors[selectedCategory] }} />
                                            <div style={{ position: "relative", left: "6px" }}>{selectedCategory}</div>
                                        </div>
                                        <div className={styles.arrow}>
                                            <IoIosArrowUp />
                                            <IoIosArrowDown />
                                        </div>
                                    </div>
                                </button>
                                {dropdownVisible && (
                                    <div >
                                        <div className={styles.dropdownMenu}>
                                            {Object.keys(categoryColors).map(category => (
                                                <div
                                                    key={category}
                                                    className={styles.dropdownMenuContent}
                                                    onClick={() => handleCategoryChange(category)}
                                                >
                                                    <GoDotFill style={{ color: categoryColors[category] }} />
                                                    {category}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={styles.emailListContainer}>
                                {filteredEmails.map((email, index) => (
                                    <div key={email.id} onClick={() => handleEmailClick(index)} className={styles.emailItem}>
                                        <div>
                                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <img src={email.profilePicture} alt={email.senderName} className={styles.emailProfilePic} />
                                                <div className={styles.emailSender}>{email.senderName}</div>
                                                <div className={styles.emailTimestamp}>{email.timestamp}</div>
                                            </div>
                                            <div className={styles.emailSubject}>{email.subject}</div>
                                            <div style={{ width: "384px", display: "flex" }}>
                                                <div className={styles.emailBodyPreview} >{email.body}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.image2}>
                <img src="./cloud.jpg" className={styles.img2} alt="Cloud" />
                <div className={styles.emailModal}>
                    <motion.div
                        key={selectedEmailIndex}  
                        className={styles.emailModalContent}
                        initial={{ opacity: 0, y: 50, rotate: shouldAnimate ? -5 : 0 }}
                        animate={{ opacity: 1, y: 0, rotate: shouldAnimate ? -5 : 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    
                    >
                                                   <div>
                            <div className={styles.dots2}>
                           <button  className={styles.dot1} onClick={handleCloseEmail} ><GoDotFill /></button>
                           <div className={styles.dot2} ><GoDotFill /></div>
                           <div className={styles.dot3} ><GoDotFill /></div>
                           </div>
                           <div className={styles.iconContainer}>
      <motion.button 
       
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <IoTrash/>
      </motion.button>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <FaArchive/>
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <RiFontSize />
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <TbTextScan2 />
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <PiShareFatFill />
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <BiSolidShare/>
      </motion.div>
    </div>
                           </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center",position:"absolute",top:"120px" }}>
                        <img src={filteredEmails[selectedEmailIndex].profilePicture} alt={filteredEmails[selectedEmailIndex].senderName} className={styles.emailProfilePic2} />
                        <div style={{ display: "flex",alignItems:"start", flexDirection: "column" }}>
                        <div className={styles.emailSender2}ffff>{filteredEmails[selectedEmailIndex].senderName}</div>
                        <div className={styles.emailSubject2}>{filteredEmails[selectedEmailIndex].subject}</div>
                        </div>
                        <div className={styles.emailTimestamp2}>{filteredEmails[selectedEmailIndex].timestamp}</div>
                        <div className={styles.emailaddress}>  <div className={styles.totext}>to</div>{filteredEmails[selectedEmailIndex].senderEmail}</div>
                        
                        
                        </div>
                        <div className={styles.emailBody2}>{filteredEmails[selectedEmailIndex].body}</div>
                        
                    </motion.div>
                    {isStackVisible && (
                        <motion.div
                            key={selectedEmailIndex + 1}  
                            className={styles.emailModalContent2}
                            initial={{ opacity: 0, y: 0 , rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                           
                        
                        >
                           <div>
                            <div className={styles.dots2}>
                           <button  className={styles.dot1} onClick={handleCloseEmail} ><GoDotFill /></button>
                           <div className={styles.dot2} ><GoDotFill /></div>
                           <div className={styles.dot3} ><GoDotFill /></div>
                           </div>
                           <div className={styles.iconContainer}>
      <motion.button 
       
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <IoTrash/>
      </motion.button>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <FaArchive/>
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <RiFontSize />
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <TbTextScan2 />
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <PiShareFatFill />
      </motion.div>
      <motion.div
        className={styles.icon}
        initial="initial"
        whileHover="hover"
        variants={iconVariants}
      >
        <BiSolidShare/>
      </motion.div>
    </div>
                           </div>

                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center",position:"absolute",top:"120px"  }}>
                            
                            <img src={filteredEmails[(selectedEmailIndex + 1) % filteredEmails.length].profilePicture} alt={filteredEmails[(selectedEmailIndex + 1) % filteredEmails.length].senderName} className={styles.emailProfilePic2} />
                            <div>
                            <div className={styles.emailSender2}>{filteredEmails[(selectedEmailIndex + 1) % filteredEmails.length].senderName}</div>
                            <div className={styles.emailSubject2}>{filteredEmails[(selectedEmailIndex + 1) % filteredEmails.length].subject}</div>
                            </div>
                            <div className={styles.emailTimestamp2}>{filteredEmails[(selectedEmailIndex + 1) % filteredEmails.length].timestamp}</div>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding: "0px 0px 0px 0px"}}>
                            <div className={styles.emailaddress}>
                            <div className={styles.totext}>to</div>
  {filteredEmails[(selectedEmailIndex + 1) % filteredEmails.length].senderEmail}
</div>
</div>
                           </div>
                            <div className={styles.emailBody2}>{filteredEmails[(selectedEmailIndex + 1) % filteredEmails.length].body}</div>
                        </motion.div>
                    )}


                </div>
                
            </div>
    

                )}
        </div>
    );
};

export default ComponentName;
