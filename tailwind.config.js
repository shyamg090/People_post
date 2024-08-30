module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FFF3E0',
        yellow: '#F4D03F',
        brown: '#8E613C',
        darkBrown: '#5D4037',
        lightYellow: '#FFF9C4',
        darkGreen: '#388E3C',
      },
      screens: {
        // 'sm': '640px',
        // // => @media (min-width: 640px) { ... }
  
        // 'md': '768px',
        // // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }
  
        // '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        wefont : "Bodoni Moda SC"
        
      },
    },
  },
  plugins: [],
};