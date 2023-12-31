module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-400":"#a2a2a2",
        "neutral-50":"#F9F9F9",
        "neutral-1000":"#000",
        "gray":"rgb(255,255,255,0.12)",
        "neutral-950":"#0a0a0a",
        "neutral-900":"#171717",
        "neutral-800":"#262626",
        "neutral-700":"#404040",
        "neutral-600":"#525252",
        "neutral-500":"#737373",
        "neutral-400":"#a2a2a2",
        "neutral-300":"#d3d3d3",
        "neutral-200":"#e4e4e4",
        "neutral-100":"#f4f4f4",
        "red-error":"#8b141a",
        "green-success":"#00be74",
        "card-fill":"#16181c",
        "searchbar-fill":"#212327",
        "blue-wash":"#rgba(117,190,239,0.2)",
        "twitter-blue":"#1d9bf0",
        "twitter-blue-disabled":"#1E5D87",
        "twitter-blue-hover":"#1871ca",
        "stroke":"rgba(29, 155, 240, 0.24)",
        "secondary":"rgba(255, 255, 255, 0.60)",
        "img-bg":"rgba(0, 0, 0, 0.60)",
      },
      spacing:{
        3.25:"0.818rem",
        18:"4.313rem",
        19:"4.563rem",
        34:"8.5rem",
        39:"9.719rem",
        50:"12.5rem",
        69.5:"17.281rem",
        81:"20.875rem",
        96.5:"24.375rem",
        97:"24.5rem",
        98:"26rem",
        100:"28.5rem",
        109:"37rem",
        197.5:"54.25rem",
      },
      fontFamily:{
        "px-regular":"Inter",
      },
    },  
      fontSize:{
        sm:"0.875rem",
        base:"1rem",
        "3xl":"1.625rem",
        "4xl":"1.938rem",
        inherit:"inherit"
      },
      borderRadius:{
        "4":"4px",
        "4xl":"4rem",
        "5xl":"62px",
        "full":"9999px",
        'xl': "65px",
        'xs': "30px",
        '12.5': "12.5rem",
      },
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },

      backdropBlur: {
        23: '23.668209075927734px',
      },


      borderWidth: {
        '1': '1px',
        '0': '0px',
      }  
  },
  corePlugins: {
    preflight:false,
  },
};
