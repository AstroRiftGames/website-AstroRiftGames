import { useEffect, useRef } from 'react';

const FloatingParticles = ({ 
  particleCount = 30,
  colors = ['#4f46e5', '#7c3aed', '#ec4899', '#06b6d4'],
  enableGlow = true,
  speed = 'medium',
  className = '',
  halloweenMode = true // NUEVO: activar modo Halloween
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Limpiar partículas existentes
    container.innerHTML = '';

    // Configuración de velocidad (más lento para Halloween)
    const speedConfig = {
      slow: { min: 12, max: 20 },    // MÁS LENTO
      medium: { min: 8, max: 12 },
      fast: { min: 4, max: 8 }
    };

    const currentSpeed = speedConfig[speed];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Configuración básica
      particle.style.position = 'absolute';
      particle.style.pointerEvents = 'none';
      
      if (halloweenMode) {
        // Tamaño aleatorio para los fantasmas
        const size = Math.random() * 40 + 30; // 30-70px
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.innerHTML = `
          <img 
            src="/images/ghost.svg" 
            alt="ghost" 
            style="
              width: 100%; 
              height: 100%; 
              object-fit: contain;
              filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
            "
          />
        `;
        
        // Opacidad variable para efecto fantasmal
        particle.style.opacity = (Math.random() * 0.4 + 0.6).toString(); // 0.6-1.0
        
        // Animación de parpadeo/flotación fantasmal
        const blinkDuration = Math.random() * 2 + 1; // 2-5 segundos
        particle.style.animation = `ghostBlink ${blinkDuration}s ease-in-out infinite`;
        
      } else {
        // ===== MODO NORMAL: PARTÍCULAS CIRCULARES =====
        particle.style.borderRadius = '50%';
        
        const size = Math.random() * 6 + 2; // 2-8px
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const hasGlow = enableGlow && Math.random() > 0.7;
        
        if (hasGlow) {
          particle.style.background = `radial-gradient(circle, ${color}, ${color}aa)`;
          particle.style.boxShadow = `
            0 0 ${size * 2}px ${color}66,
            0 0 ${size * 4}px ${color}33,
            0 0 ${size * 6}px ${color}1a
          `;
          particle.style.opacity = '0.9';
        } else {
          particle.style.background = `linear-gradient(45deg, ${color}, ${color}dd)`;
          particle.style.opacity = '0.7';
        }
      }
      
      // Posición inicial aleatoria
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      particle.style.left = startX + '%';
      particle.style.top = startY + '%';
      
      // Crear animación de movimiento
      const createFloatingAnimation = () => {
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const duration = Math.random() * (currentSpeed.max - currentSpeed.min) + currentSpeed.min;
        
        // TIEMPOS DE FADE MÁS RÁPIDOS
        const keyframes = [
          { 
            transform: 'translate(0, 0) scale(0.3)', 
            opacity: 0 
          },
          { 
            transform: 'translate(0, 0) scale(1)', 
            opacity: halloweenMode ? (Math.random() * 0.4 + 0.6) : 0.9,
            offset: 0.05  // APARECE MÁS RÁPIDO (antes era 0.1)
          },
          { 
            transform: `translate(${(endX - startX) * 0.8}vw, ${(endY - startY) * 0.6}vh) scale(1)`, 
            opacity: halloweenMode ? (Math.random() * 0.4 + 0.6) : 0.9,
            offset: 0.95  // DESAPARECE MÁS RÁPIDO (antes era 0.9)
          },
          { 
            transform: `translate(${(endX - startX)}vw, ${(endY - startY)}vh) scale(0.3)`, 
            opacity: 0 
          }
        ];
        
        return particle.animate(keyframes, {
          duration: duration * 1000,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fill: 'forwards'
        });
      };
      
      // Función para reiniciar la animación
      const restartAnimation = () => {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const animation = createFloatingAnimation();
        animation.onfinish = () => {
          setTimeout(restartAnimation, Math.random() * 2000 + 500);
        };
      };
      
      // Iniciar la animación con delay aleatorio
      setTimeout(restartAnimation, Math.random() * 3000);
      
      container.appendChild(particle);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [particleCount, colors, enableGlow, speed, halloweenMode]);

  return (
    <>
      {/* Estilos CSS para la animación de parpadeo de fantasmas */}
      <style>{`
        @keyframes ghostBlink {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.7;
            filter: brightness(1.2);
          }
        }
      `}</style>
      
      <div 
        ref={containerRef}
        className={`floating-particles-container ${className}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </>
  );
};

export default FloatingParticles;