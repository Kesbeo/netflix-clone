import React, { useEffect, useState } from "react";

import BillboardInfo from "./BillboardInfo";

import cover from "./assets/M3GAN-cover.jpg";
import trailer from "./assets/M3GAN-trailer.mp4";
import styles from "./Billboard.module.css";

/**
 * A billboard component for showcasing a movie with preview function on the home page.
 */
const Billboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  /* Starts playing trailer after a short delay */
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsPlaying(true);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, []);

  const videoEndHandler = () => {
    setIsPlaying(false);
  };

  const videoPlayHandler = () => {
    setIsPlaying(true);
  };

  return (
    /* Outer span and div used as wrappers to layout Billboard and Rows */
    <span className={styles["volatile-billboard"]}>
      <div className={styles["billboard-row"]}>
        {/* Defines the layout of video container and image container */}
        <div className={styles.billboard}>
          {/* Vignetting mask at the bottom of video or image */}
          <div className={styles["billboard-vignette"]} />

          {/* Trailer div, only rendered when isPlaying is set */}
          {isPlaying && (
            <div
              className={`${styles["billboard-video-container"]} ${styles["billboard-video-container-wide"]}`}
            >
              <video
                autoPlay // to be set at deployment
                //controls
                muted
                className={`${styles["billboard-video"]}`}
                onEnded={videoEndHandler}
              >
                <source src={trailer} type="video/mp4" />
              </video>
            </div>
          )}

          {/* Image div */}
          <div className={styles["billboard-img-container"]}>
            <img
              className={styles["billboard-img"]}
              src={cover}
              alt="billboard-cover-img"
            />
          </div>

          {/* Info and Button div */}
          <BillboardInfo onPlay={videoPlayHandler} />
        </div>
      </div>
    </span>
  );
};

export default Billboard;
