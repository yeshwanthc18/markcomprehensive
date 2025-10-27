'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollTriggerProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
  stagger?: number;
  delay?: number;
  className?: string;
}

export default function ScrollTriggerComponent({
  children,
  animation = 'fadeInUp',
  start = 'top 80%',
  trigger,
  end = 'bottom 20%',
  scrub = false,
  stagger = 0,
  delay = 0,
  className = '',
}: ScrollTriggerProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    if (!element) return;

    const children = element.children;
    const targets = stagger > 0 ? Array.from(children) : element;

    let fromVars: any = {};
    let toVars: any = {};

    switch (animation) {
      case 'fadeIn':
        fromVars = { opacity: 0 };
        toVars = { opacity: 1 };
        break;
      case 'fadeInUp':
        fromVars = { opacity: 0, y: 60 };
        toVars = { opacity: 1, y: 0 };
        break;
      case 'fadeInLeft':
        fromVars = { opacity: 0, x: -50 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'fadeInRight':
        fromVars = { opacity: 0, x: 50 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'scaleIn':
        fromVars = { opacity: 0, scale: 0.8 };
        toVars = { opacity: 1, scale: 1 };
        break;
    }

    gsap.set(targets, fromVars);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start,
        end,
        scrub,
        toggleActions: 'play none none reverse',
      },
    });

    if (stagger > 0) {
      tl.to(targets, {
        ...toVars,
        duration: 0.4,
        ease: 'power2.out',
        stagger,
        delay,
      });
    } else {
      tl.to(targets, {
        ...toVars,
        duration: 0.8,
        ease: 'power2.out',
        delay,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, trigger, start, end, scrub, stagger, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}