/** @type {import('tailwindcss').Config} */
module.exports = {
    // Active le mode sombre basé sur une classe HTML ('<html class="dark">')
    darkMode: 'class',
  
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scanne tous vos fichiers React pour les classes Tailwind
    ],
  
    theme: {
      extend: {
        // Définition de votre palette de couleurs personnalisée
        colors: {
          'brand-primary': '#00BFFF',    // Un bleu vibrant pour les accents et logos (similaire à blue-500)
          'brand-secondary': '#000080',   // Un bleu-vert (teal) pour les en-têtes et les titres (similaire à teal-500)
          
          // Couleurs spécifiques au mode sombre
          'dark-bg': '#1a202c',          // Fond principal très sombre (similaire à gray-900)
          'dark-card': '#2d3748',        // Fond des cartes, légèrement plus clair (similaire à gray-800)
        
        },
  
        // Définition de votre police d'affichage personnalisée
        fontFamily: {
          // Ajoute 'font-display' pour que vous puissiez l'utiliser.
          // Remplacez 'Inter' par le nom de votre police si vous en utilisez une spécifique.
          'display': ['Inter', 'system-ui', 'sans-serif'],
        },
  
        // Définition de vos animations personnalisées
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideIn: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideInFromLeft: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          pulseSlow: {
              '0%, 100%': { opacity: '1' },
              '50%': { opacity: '.5' },
          }
        },
        
        // Association des keyframes à des noms de classes d'animation
        animation: {
          'fadeIn': 'fadeIn 0.5s ease-in-out',
          'slideIn': 'slideIn 0.5s ease-in-out',
          'slideInFromLeft': 'slideInFromLeft 0.5s ease-in-out',
          'pulse-slow': 'pulseSlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
  
    plugins: [],
  }