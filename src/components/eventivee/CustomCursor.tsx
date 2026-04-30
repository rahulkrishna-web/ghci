'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Dynamic settings from debug panel
  const [settings, setSettings] = useState({
    sizeDefault: 16,
    sizeHover: 20,
    colorDefault: '#A32482',
    colorHover: 'rgba(163, 36, 130, 0.8)',
    borderDefault: 0,
    borderHover: 0,
    opacityDefault: 1,
    opacityHover: 0.8,
  });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer = window.getComputedStyle(target).cursor === 'pointer' || 
                        target.tagName.toLowerCase() === 'a' || 
                        target.tagName.toLowerCase() === 'button' ||
                        target.closest('a') ||
                        target.closest('button');
      
      setIsHovered(!!isPointer);
    };

    const handleConfigUpdate = (e: any) => {
      setSettings(e.detail);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('cursor-config-update', handleConfigUpdate);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('cursor-config-update', handleConfigUpdate);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        borderWidth: isHovered ? settings.borderHover : settings.borderDefault,
        borderColor: settings.colorDefault, // Border usually stays the same color but can be changed
        borderStyle: 'solid',
      }}
      animate={{
        width: isHovered ? settings.sizeHover : settings.sizeDefault,
        height: isHovered ? settings.sizeHover : settings.sizeDefault,
        backgroundColor: isHovered ? settings.colorHover : 'transparent',
        opacity: isVisible ? (isHovered ? settings.opacityHover : settings.opacityDefault) : 0,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};

export default CustomCursor;
