// Design System Configuration
// Updated to match New TailwindCSS v3.4.1 Theme

export const designSystem = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    secondary: {
      500: '#f97316',
      600: '#ea580c',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      800: '#1e293b',
      900: '#0f172a',
    },
    skin: {
      50:  '#f7efe8',
      100: '#eddcc9',
      200: '#dbb893',
      300: '#c79a6a',
      400: '#a87644',
      500: '#8a5c32',
      600: '#6d4828',
      700: '#553a21',
      800: '#402b18',
      900: '#2b1d10',
    },
    contrast: {
      50:  '#1a1a1a',
      100: '#1a1a1a',
      200: '#1a1a1a',
      300: '#1a1a1a',
      400: '#121212',
      500: '#121212',
      600: '#121212',
      700: '#1a1a1a',
      800: '#121212',
      900: '#0b0b0b',
    },
  },

  typography: {
    fonts: {
      heading: '"Space Grotesk", sans-serif',
      body: '"Inter", sans-serif',
      mono: '"JetBrains Mono"',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },

  spacing: {
    section: '5rem',
    sectionMobile: '3rem',
  },

  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  borderRadius: {
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
  },
};

export type DesignSystem = typeof designSystem;
