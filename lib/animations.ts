import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configurations
export const animationConfig = {
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.1,
};

// Fade in animation
export const fadeIn = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Fade in up animation
export const fadeInUp = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Fade in left animation
export const fadeInLeft = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Fade in right animation
export const fadeInRight = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Scale in animation
export const scaleIn = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements: string | Element[], options = {}) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      stagger: animationConfig.stagger,
      ...options,
    }
  );
};

// Counter animation
export const animateCounter = (element: Element, endValue: number, options = {}) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toString();
    },
    ...options,
  });
};

// Parallax effect
export const parallaxEffect = (element: string | Element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Text reveal animation
export const textReveal = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { 
      opacity: 0,
      y: 100,
      skewY: 7,
    },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.2,
      ease: 'power4.out',
      ...options,
    }
  );
};

// Image reveal animation
export const imageReveal = (element: string | Element, options = {}) => {
  return gsap.fromTo(
    element,
    { 
      scale: 1.2,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
      ...options,
    }
  );
};

// Magnetic button effect
export const magneticEffect = (button: Element) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };
};