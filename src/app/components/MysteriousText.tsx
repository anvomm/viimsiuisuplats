"use client";

import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

export const MysteriousText: React.FC<{ children: string, lngChanged: boolean }> = ({
  children, lngChanged
}) => {
  const [needToupdate, setNeedToUpdate] = useState<boolean>(false);

  useEffect(() => {
    setNeedToUpdate(!needToupdate);
  }, [lngChanged]);

  return (
    <>
      {children.split("").map((item, index) => (
        <animated.span key={index} style={useSpring({ opacity: 1, from: { opacity: 0 }, delay: Math.random() * 350 })}>
          {item}
        </animated.span>
      ))}
    </>
  );
};
