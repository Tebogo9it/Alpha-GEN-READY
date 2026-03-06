import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapFadeIn<T extends HTMLElement>(options?: { delay?: number; y?: number; x?: number; duration?: number; stagger?: number }) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: options?.y ?? 30, x: options?.x ?? 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: options?.duration ?? 0.7,
        delay: options?.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return ref;
}

export function useGsapStagger<T extends HTMLElement>(selector: string, options?: { y?: number; duration?: number; stagger?: number; delay?: number }) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const children = el.querySelectorAll(selector);

    gsap.fromTo(
      children,
      { opacity: 0, y: options?.y ?? 30 },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 0.6,
        stagger: options?.stagger ?? 0.1,
        delay: options?.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return ref;
}

export function useGsapScale<T extends HTMLElement>(options?: { delay?: number; duration?: number }) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: options?.duration ?? 0.5,
        delay: options?.delay ?? 0,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return ref;
}

export { gsap, ScrollTrigger };
