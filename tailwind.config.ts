import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0a0e17',
          925: '#0d1321',
          900: '#111827',
        },
        accent: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          amber: '#f59e0b',
          orange: '#f97316',
          silver: '#94a3b8',
          graphite: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'flow': 'flow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flow: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(0)' },
          '50%': { opacity: '0.6', transform: 'translateX(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
    },
  },
  plugins: [],
};
export default config;
