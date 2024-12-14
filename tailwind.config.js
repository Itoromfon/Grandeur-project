// tailwind.config.js
module.exports = {
    darkMode: ["class"],
    content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
    	"./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		keyframes: {
			popup: {
			  '0%': { transform: 'scale(1)' },
			  '50%': { transform: 'scale(1.1)' },
			  '100%': { transform: 'scale(1)' },
			},
		  },
		  animation: {
			popup: 'popup 2.5s ease-out infinite', // Add `infinite` to make it repeat
		  },

		  /*animation: backgroundPop 4s ease-in-out infinite;*/
		screens: {
			'mobile-320-400': { min: '320px', max: '400px' }, 
			'mobile-401-480': { min: '401px', max: '480px' }, 
			'mobile-481-600': { min: '481px', max: '600px' }, 
			'mobile-601-768': { min: '601px', max: '768px' }, 
			'mobile-769-900': { min: '769px', max: '900px' }, 
			'mobile-901-1200': { min: '901px', max: '1200px' },
		},
		fontFamily: {
			custom: ['Arial', 'Helvetica', 'sans-serif'], // Add your font stack
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			customGray: '#DFE0E4',
			customBlue: 'rgb(0, 166, 255)',
			customWhite: 'rgb(239, 239, 239);',
			customSun: 'rgb(150, 205, 208);',
			"dark": '#232A3C',
			"medium": '#293245',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
























































































































































