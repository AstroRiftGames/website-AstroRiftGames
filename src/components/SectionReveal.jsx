import { useEffect, useRef, useState } from 'react';

const SectionReveal = ({
  children,
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -8% 0px',
  once = false,
  className = '',
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // If user prefers reduced motion, trigger reveal instantly
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsRevealed(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  const style = delay ? { '--reveal-delay': `${delay}ms` } : undefined;

  return (
    <div
      ref={domRef}
      className={`section-reveal ${isRevealed ? 'revealed' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
