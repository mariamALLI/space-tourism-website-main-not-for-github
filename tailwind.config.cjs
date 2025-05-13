/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        grayish_blue: 'hsl(217, 19%, 38%)',
        dark_grayish_blue: 'hsl(217, 19%, 24%)',
        for_text: '#fff',
        for_number: '#ffffff',
        dark_navy: '#0c0e18',
        line_color: '#4e5a73',
        light_white: '#ffffff0d',
        h1_clr: '#d2d8f9'
      },
      fontFamily: {
        belle: ["Bellefair", "serif"],
        barlow_c: ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"]
      },
      fontSize: {
        'heading-1': ['150px', { lineHeight: '1', letterSpacing: '0' }],
        'heading-2': ['100px', { lineHeight: '1', letterSpacing: '0' }],
        'heading-3': ['56px', { lineHeight: '1', letterSpacing: '0' }],
        'heading-4': ['32px', { lineHeight: '1', letterSpacing: '0' }],
        'heading-5': ['28px', { lineHeight: '1', letterSpacing: '4.75px' }],
        'subheading-1': ['28px', { lineHeight: '1', letterSpacing: '0' }],
        'subheading-2': ['14px', { lineHeight: '1', letterSpacing: '2.35px' }],
        'nav-text': ['16px', { lineHeight: '1', letterSpacing: '2.7px' }],
        'body-text': ['18px', { lineHeight: '1.78', letterSpacing: '0' }],
      },
      backgroundImage: theme => ({
        'body_mobile_hero': "url('/assets/home/background-home-mobile.jpg')",
        'body_desktop_hero': "url('/assets/home/background-home-desktop.jpg')",
        'body_tablet_hero': "url('/assets/home/background-home-tablet.jpg')",
        'body_mobile_des': "url('/assets/destination/background-destination-mobile.jpg')",
        'body_desktop_des': "url('/assets/destination/background-destination-desktop.jpg')",
        'body_tablet_des': "url('/assets/destination/background-destination-tablet.jpg')",
        'body_mobile_crew': "url('/assets/crew/background-crew-mobile.jpg')",
        'body_desktop_crew': "url('/assets/crew/background-crew-desktop.jpg')",
        'body_tablet_crew': "url('/assets/crew/background-crew-tablet.jpg')",
        'body_mobile_tech': "url('/assets/technology/background-technology-mobile.jpg')",
        'body_desktop_tech': "url('/assets/technology/background-technology-desktop.jpg')",
        'body_tablet_tech': "url('/assets/technology/background-technology-tablet.jpg')"
      })
    },
  },
  plugins: [],
}