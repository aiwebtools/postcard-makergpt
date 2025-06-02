
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Divine Cyberpunk theme colors
        cyber: {
          divine: '#0a0a0f',
          dark: '#121212',
          darker: '#0A0A0A',
          background: '#1A1F2C',
          neon: {
            cyan: '#00FFFF',
            magenta: '#FF00FF',
            blue: '#1EAEDB',
            purple: '#8B5CF6',
            pink: '#D946EF',
            divine: '#8A2BE2',
            holy: '#FFD700',
            celestial: '#E6E6FA'
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#E6E6FA',
            muted: '#B8B8FF',
            divine: '#FFD700'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00FFFF, 0 0 15px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF',
            boxShadow: '0 0 5px #00FFFF, 0 0 15px #00FFFF'
          },
          '50%': { 
            textShadow: '0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF, 0 0 50px #FF00FF',
            boxShadow: '0 0 10px #FF00FF, 0 0 20px #FF00FF'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
          '50%': { transform: 'translateY(-15px) rotateX(5deg)' }
        },
        'divine-glow': {
          '0%, 100%': { 
            textShadow: '0 0 10px #00FFFF, 0 0 20px #FF00FF, 0 0 30px #8A2BE2',
            filter: 'brightness(1) saturate(1)'
          },
          '33%': { 
            textShadow: '0 0 15px #FF00FF, 0 0 30px #8A2BE2, 0 0 45px #00FFFF',
            filter: 'brightness(1.2) saturate(1.3)'
          },
          '66%': { 
            textShadow: '0 0 20px #8A2BE2, 0 0 40px #00FFFF, 0 0 60px #FF00FF',
            filter: 'brightness(1.1) saturate(1.2)'
          }
        },
        'divine-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(255, 0, 255, 0.2)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(255, 0, 255, 0.4)'
          }
        },
        'divine-shimmer': {
          '0%': { 
            backgroundPosition: '-200% -200%',
            transform: 'translateX(-100%)'
          },
          '100%': { 
            backgroundPosition: '200% 200%',
            transform: 'translateX(100%)'
          }
        },
        'divine-wave': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-1deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'divine-glow': 'divine-glow 4s ease-in-out infinite',
        'divine-pulse': 'divine-pulse 3s ease-in-out infinite',
        'divine-shimmer': 'divine-shimmer 3s ease-in-out infinite',
        'divine-wave': 'divine-wave 8s ease-in-out infinite',
        'divine-float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out'
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'cyber-grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 0h100v100H0z' fill='%23121212'/%3E%3Cpath d='M0 0h1v100H0zm25 0h1v100h-1zm25 0h1v100h-1zm25 0h1v100h-1zm24 0h1v100h-1zM0 0v1h100V0zm0 25v1h100v-1zm0 25v1h100v-1zm0 25v1h100v-1zm0 24v1h100v-1z' fill='%231e4d5c' opacity='.3'/%3E%3C/svg%3E\")",
        'divine-gradient': 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 50%, rgba(138, 43, 226, 0.1) 100%)',
        'divine-radial': 'radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, rgba(255, 0, 255, 0.1) 50%, transparent 100%)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
