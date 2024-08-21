// Function to create the loading overlay
function showLoadingOverlay() {
  const overlay = document.createElement('div')
  overlay.id = 'loading-overlay'
  overlay.style.position = 'fixed'
  overlay.style.top = '0'
  overlay.style.left = '0'
  overlay.style.width = '100%'
  overlay.style.height = '100%'
  overlay.style.backgroundColor = '#000000' // Black background
  overlay.style.zIndex = '9999' // Ensure it's on top of everything
  overlay.style.display = 'flex'
  overlay.style.justifyContent = 'center'
  overlay.style.alignItems = 'center'
  overlay.style.color = '#FFFFFF' // White text color
  overlay.style.fontSize = '24px'
  overlay.innerHTML = 'Loading...' // You can replace this with a spinner or custom message
  document.body.appendChild(overlay)
}
showLoadingOverlay()

// Function to hide the loading overlay
function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay')
  if (overlay) {
    overlay.style.transition = 'opacity 0.5s' // Optional fade-out transition
    overlay.style.opacity = '0'
    setTimeout(() => {
      overlay.remove() // Remove it after the transition
    }, 500) // Match the duration of the transition
  }
}

type Theme = {
  fullScreenEffectBackground: string
  pageWideAnimation: string
  animationStyles: string
  imageFilter: string
  textColors: {
    light: string
    dark: string
  }
  backgroundColors: string[]
  textDecorations: {
    color: string
    fontFamily: string
    textShadow: string
  }
  cursorStyle: string
  clickAnimation: (element: HTMLElement) => void
}

// 90s Theme
const theme90s: Theme = {
  fullScreenEffectBackground:
    'radial-gradient(circle, rgba(255, 255, 0, 0.8), rgba(255, 0, 255, 0.8))', // Example effect: Neon burst
  pageWideAnimation: `
  @keyframes shake { 
    0%, 100% { transform: translateX(0); } 
    25% { transform: translateX(-5px); } 
    75% { transform: translateX(5px); } 
  }
  body {
    animation: shake 0.5s linear infinite;
  }
  `, // Shake the entire page
  animationStyles: `
  @keyframes rotate { 
    from { transform: rotate(0deg); } 
    to { transform: rotate(360deg); } 
  }
  @keyframes pulse { 
    0% { transform: scale(1); } 
    50% { transform: scale(1.1); } 
    100% { transform: scale(1); } 
  }
  @keyframes colorCycle { 
    0% { filter: hue-rotate(0deg); } 
    100% { filter: hue-rotate(360deg); } 
  }
  h1, h2, h3, h4, h5, h6 { animation: rotate 10s linear infinite; }
  button { animation: pulse 2s ease-in-out infinite; }
  img { animation: colorCycle 5s linear infinite; }
`,
  imageFilter:
    'contrast(200%) brightness(150%) saturate(200%) drop-shadow(0 0 10px #00FFFF) blur(1px)', // Neon 90s effect

  textColors: {
    light: '#FFFFFF', // White
    dark: '#1A1A1A', // Very Dark Gray
  },
  backgroundColors: ['#FF00FF', '#00FFFF', '#FFFF00', '#FF4500'], // Neon pink, cyan, yellow, and orange

  textDecorations: {
    color: '#FF00FF', // Hot pink
    fontFamily: 'Comic Sans MS, cursive', // Classic 90s web font
    textShadow: '2px 2px 5px #00FF00', // Neon green shadow
  },
  cursorStyle: 'url(https://example.com/90s-cursor.gif), auto', // A pixelated 90s cursor
  clickAnimation: (element) => {
    element.style.transition = 'transform 0.2s ease'
    element.style.transform = 'rotate(20deg)' // Rotate on click
    setTimeout(() => {
      element.style.transform = 'rotate(0)'
    }, 200)
  },
}

// 2000s Theme
const theme2000s: Theme = {
  fullScreenEffectBackground:
    'linear-gradient(135deg, rgba(173, 216, 230, 0.8), rgba(30, 144, 255, 0.8))', // Light blue to Dodger blue burst
  pageWideAnimation: `
      @keyframes flashyZoom {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

  body { 
    animation: flashyZoom 4s ease-in-out infinite;
  }
  `, // Soft pulsing effect
  animationStyles: `
    @keyframes blink { 
      0%, 100% { opacity: 1; } 
      50% { opacity: 0; } 
    }
    @keyframes zoom { 
      0% { transform: scale(1); } 
      50% { transform: scale(1.05); } 
      100% { transform: scale(1); } 
    }
    @keyframes blurSharpen { 
      0%, 100% { filter: blur(0px); } 
      50% { filter: blur(2px); } 
    }
    h1, h2, h3, h4, h5, h6 { 
      animation: blink .5s step-start infinite; /* Blinking effect */
    }
    button { 
      animation: zoom 2s ease-in-out infinite; 
    }
    img { 
      animation: blurSharpen 4s ease-in-out infinite; 
    }
  `,
  imageFilter: 'contrast(150%) saturate(180%) brightness(120%) blur(2px)', // Glossy 2000s effect

  textColors: {
    light: '#F8F8FF', // Ghost White
    dark: '#2F4F4F', // Dark Slate Gray
  },
  backgroundColors: ['#1E90FF', '#ADD8E6', '#D3D3D3', '#C0C0C0'], // Dodger blue, light blue, light gray, silver

  textDecorations: {
    color: '#0000FF', // Blue color scheme
    fontFamily: 'Verdana, sans-serif', // Popular font from the 2000s
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
  },
  cursorStyle: 'url(https://example.com/2000s-cursor.png), auto', // Flash animation-style cursor
  clickAnimation: (element) => {
    element.style.transition = 'transform 0.3s ease'
    element.style.transform = 'scale(1.2)' // Slight zoom on click
    setTimeout(() => {
      element.style.transform = 'scale(1)'
    }, 300)
  },
}

// Year 3000 Theme
const themeYear3000: Theme = {
  fullScreenEffectBackground:
    'radial-gradient(circle, rgba(0, 255, 255, 0.8), rgba(0, 0, 255, 0.8))', // Futuristic cyan to blue burst
  pageWideAnimation: `
      @keyframes glitchEffect {
      0% { transform: none; }
      20% { transform: translate(5px, -5px) skew(2deg); }
      40% { transform: translate(-5px, 5px) skew(-2deg); }
      60% { transform: translate(5px, 5px) skew(2deg); }
      80% { transform: translate(-5px, -5px) skew(-2deg); }
      100% { transform: none; }
    }

    @keyframes glitchShadow {
      0%, 100% { box-shadow: none; }
      50% { box-shadow: 10px 10px 20px rgba(0, 255, 255, 0.5); }
    }

    body {
      animation: glitchEffect 3s ease-in-out infinite alternate, glitchShadow 3s ease-in-out infinite alternate;
    }`, // Subtle glowing effect
  animationStyles: `
  @keyframes tilt { 
    0% { transform: perspective(1000px) rotateY(0deg); } 
    50% { transform: perspective(1000px) rotateY(15deg); } 
    100% { transform: perspective(1000px) rotateY(0deg); } 
  }
  @keyframes glowPulse { 
    0%, 100% { box-shadow: 0 0 15px #00FFFF; } 
    50% { box-shadow: 0 0 30px #00FFFF; } 
  }
  @keyframes ripple { 
    0%, 100% { transform: scale(1); } 
    50% { transform: scale(1.05); } 
  }
  h1, h2, h3, h4, h5, h6 { animation: tilt 8s ease-in-out infinite; }
  button { animation: glowPulse 2.5s ease-in-out infinite; }
  img { animation: ripple 4s ease-in-out infinite; }
`,
  imageFilter:
    'brightness(180%) saturate(150%) hue-rotate(180deg) drop-shadow(0 0 15px #00FFFF) blur(2px)',

  textColors: {
    light: '#E0FFFF', // White
    dark: '#0B0B45', // Black
  },
  backgroundColors: ['#00FFFF', '#00FF00', '#0000FF', '#8A2BE2'], // Cyan, neon green, blue, electric purple

  textDecorations: {
    color: '#00FFFF', // Neon cyan
    fontFamily: 'Orbitron, sans-serif', // Futuristic font
    textShadow: '2px 2px 8px rgba(0, 255, 255, 0.7)', // Glowing shadow
  },
  cursorStyle: 'url(https://example.com/3000-cursor.png), auto', // Futuristic holographic cursor
  clickAnimation: (element) => {
    element.style.transition = 'transform 0.4s ease, opacity 0.4s ease'
    element.style.transform = 'translateY(-10px)' // Float up on click
    element.style.opacity = '0.7'
    setTimeout(() => {
      element.style.transform = 'translateY(0)'
      element.style.opacity = '1'
    }, 400)
  },
}

// Cozy Theme
const themeCozy: Theme = {
  fullScreenEffectBackground:
    'linear-gradient(135deg, rgba(244, 164, 96, 0.8), rgba(255, 218, 185, 0.8))', // Warm brown to peach burst
  pageWideAnimation: `
      @keyframes softSway {
      0% { transform: translateY(0); }
      50% { transform: translateY(10px); }
      100% { transform: translateY(0); }
    }
    body {
      animation: softSway 8s ease-in-out infinite;
    }
      `, // Gentle swaying effect across the page
  animationStyles: `
  @keyframes sway { 
    0% { transform: translateX(0); } 
    50% { transform: translateX(5px); } 
    100% { transform: translateX(0); } 
  }
  @keyframes slowPulse { 
    0% { transform: scale(1); } 
    50% { transform: scale(1.05); } 
    100% { transform: scale(1); } 
  }
  @keyframes fadeInOut { 
    0%, 100% { opacity: 1; } 
    50% { opacity: 0.8; } 
  }
  h1, h2, h3, h4, h5, h6 { animation: sway 6s ease-in-out infinite; }
  button { animation: slowPulse 3s ease-in-out infinite; }
  img { animation: fadeInOut 5s ease-in-out infinite; }
`,
  imageFilter: 'sepia(50%) brightness(110%) contrast(90%) blur(1px)',

  textColors: {
    light: '#FFF8DC',
    dark: '#4B2E1A',
  },
  backgroundColors: ['#D2691E', '#F4A460', '#FFDAB9', '#FFE4B5'], // Chocolate, sandy brown, peach puff, moccasin

  textDecorations: {
    color: '#D2691E', // Warm brown tones
    fontFamily: 'Georgia, serif', // Soft serif font
    textShadow: '1px 1px 2px rgba(139, 69, 19, 0.5)', // Warm shadow effect
  },
  cursorStyle: 'url(https://example.com/cozy-cursor.png), auto', // Cozy, soft cursor (e.g., a teacup)
  clickAnimation: (element) => {
    element.style.transition = 'transform 0.2s ease'
    element.style.transform = 'scale(1.05)' // Gentle zoom on click
    setTimeout(() => {
      element.style.transform = 'scale(1)'
    }, 200)
  },
}

// Edgy Theme
const themeEdgy: Theme = {
  fullScreenEffectBackground: 'radial-gradient(circle, rgba(255, 0, 0, 0.8), rgba(0, 0, 0, 0.8))', // Dark red to black burst
  pageWideAnimation: `
      @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  body {
   animation: pulse 2s infinite
  }`, // Intense pulsing effect
  animationStyles: `
  @keyframes shake { 
    0%, 100% { transform: translateX(0); } 
    25% { transform: translateX(-5px); } 
    75% { transform: translateX(5px); } 
  }
  @keyframes quickPulse { 
    0%, 100% { transform: scale(1); } 
    50% { transform: scale(1.1); } 
  }
  @keyframes flicker { 
    0%, 100% { filter: grayscale(0%); } 
    50% { filter: grayscale(100%); } 
  }
  h1, h2, h3, h4, h5, h6 { animation: shake 0.5s linear infinite; }
  button { animation: quickPulse 1s ease-in-out infinite; }
  img { animation: flicker 2s linear infinite; }
`,
  imageFilter:
    'contrast(250%) brightness(80%) saturate(150%) grayscale(30%) drop-shadow(0 0 10px #FF0000)',
  textColors: {
    light: '#E5E5E5',
    dark: '#2E2E2E',
  },
  backgroundColors: ['#FF0000', '#8B0000', '#000000', '#4B0082'], // Red, dark red, black, indigo

  textDecorations: {
    color: '#FF0000', // Bold red
    fontFamily: 'Impact, sans-serif', // In-your-face font
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)', // Strong, dark shadows
  },
  cursorStyle: 'url(https://example.com/edgy-cursor.png), auto', // Sharp, edgy cursor (e.g., a dagger)
  clickAnimation: (element) => {
    element.style.transition = 'transform 0.2s ease'
    element.style.transform = 'scale(0.9)' // Shrink on click
    setTimeout(() => {
      element.style.transform = 'scale(1)'
    }, 200)
  },
}

// Absurdist Theme
const themeAbsurdist: Theme = {
  fullScreenEffectBackground:
    'radial-gradient(circle, rgba(255, 165, 0, 0.8), rgba(127, 255, 0, 0.8))', // Bright orange to green burst
  pageWideAnimation: `
  @keyframes tilt { 
    0% { transform: perspective(1000px) rotateY(15deg); }  
    50% { transform: perspective(1000px) rotateY(-15deg); } 
    100% { transform: perspective(1000px) rotateY(15deg); } 
  }
  body {
    animation: tilt 5s ease-in-out infinite;
  }`, // Random tilting effect across the page
  animationStyles: `
  @keyframes wobble { 
    0% { transform: rotate(0deg); } 
    25% { transform: rotate(-10deg); } 
    50% { transform: rotate(10deg); } 
    100% { transform: rotate(0deg); } 
  }
  @keyframes randomGrowShrink { 
    0%, 100% { transform: scale(1); } 
    25% { transform: scale(1.2); } 
    75% { transform: scale(0.8); } 
  }
  @keyframes randomRotateScale { 
    0% { transform: rotate(0deg) scale(1); } 
    50% { transform: rotate(20deg) scale(1.2); } 
    100% { transform: rotate(0deg) scale(1); } 
  }
  h1, h2, h3, h4, h5, h6 { animation: wobble 3s ease-in-out infinite; }
  button { animation: randomGrowShrink 2s ease-in-out infinite; }
  img { animation: randomRotateScale 5s ease-in-out infinite; }
`,
  imageFilter: 'hue-rotate(90deg) saturate(300%) contrast(200%) drop-shadow(0 0 10px #FF1493)',
  textColors: {
    light: '#F0FFF0',
    dark: '#483D8B',
  },
  backgroundColors: ['#FFA500', '#FF1493', '#7FFF00', '#00FFFF'], // Orange, deep pink, chartreuse, cyan

  textDecorations: {
    color: '#FFA500', // Bright orange
    fontFamily: 'Papyrus, sans-serif', // Odd, quirky font
    textShadow: '4px 4px 8px rgba(255, 165, 0, 0.6)', // Intense shadow effect
  },
  cursorStyle: 'url(https://example.com/absurdist-cursor.png), auto', // Completely random cursor (e.g., a rubber duck)
  clickAnimation: (element) => {
    element.style.transition = 'transform 0.1s ease'
    element.style.transform = 'rotate(45deg)' // Wild spin on click
    setTimeout(() => {
      element.style.transform = 'rotate(0)'
    }, 100)
  },
}

export const themes = {
  theme90s,
  theme2000s,
  themeYear3000,
  themeCozy,
  themeEdgy,
  themeAbsurdist,
}

let currentTheme = themes['theme2000s']

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'apply-theme') {
    const selectedTheme = themes[message.theme as keyof typeof themes]
    if (selectedTheme) {
      currentTheme = selectedTheme
      applyTheme()
    }
  }
})
chrome.storage.sync.get(['theme'], (result) => {
  currentTheme = themes[(result.theme as keyof typeof themes) || 'theme2000s']
  applyTheme()
})

// Helper function to apply image filters
function applyImageFilters() {
  const images = document.querySelectorAll('img')
  images.forEach((img) => {
    img.style.filter = currentTheme.imageFilter // Apply the filter from the theme
  })
}

// Function to apply text decorations
function applyTextDecorations() {
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div')
  textElements.forEach((el) => {
    // do type check
    if (!(el instanceof HTMLElement)) {
      return
    }
    el.style.fontFamily = currentTheme.textDecorations.fontFamily
    el.style.textShadow = currentTheme.textDecorations.textShadow
  })
}

// Function to change the cursor style
function changeCursor() {
  document.body.style.cursor = currentTheme.cursorStyle
}

// Helper function to calculate the depth of an element
function calculateDepth(element: Element) {
  let depth = 0
  while (element.parentElement) {
    element = element.parentElement
    depth++
  }
  return depth
}

// Function to apply continuous animations
function applyContinuousAnimations() {
  const style = document.createElement('style')
  style.textContent = currentTheme.animationStyles // Inject the theme's animation styles
  document.head.appendChild(style)
}

function injectCustomStyles() {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.textContent = currentTheme.pageWideAnimation // Insert the custom animation CSS from the theme
  document.head.appendChild(style)

  // Apply the class that triggers the animation to the body
  document.body.classList.add('page-wide-animation')
}

// Helper function to interpolate between two colors
function interpolateColor(
  color1: [number, number, number],
  color2: [number, number, number],
  factor: number,
): [number, number, number] {
  const result = color1.slice()
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - result[i]))
  }
  return result as [number, number, number]
}

// Helper function to convert hex color to RGB array
function hexToRgb(hex: string): [number, number, number] {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return [r, g, b]
}

// Helper function to calculate brightness of an RGB color
function calculateBrightness(rgb: [number, number, number]) {
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 // Standard formula for brightness
}

// Function to choose high contrast text color (returns black or white)
function getContrastingTextColor(rgb: [number, number, number]) {
  const brightness = calculateBrightness(rgb)
  return brightness > 128 ? currentTheme.textColors.dark : currentTheme.textColors.light // Bright background => black text, Dark background => white text
}

// Function to apply dynamic background and text colors
function applyDynamicBackgroundAndTextColors() {
  const elements = document.querySelectorAll(
    'div, section, article, aside, header, footer, body, html, form, table, col, tr, tbody, td, iframe, ytd-browse',
  ) // Add more container tags if needed
  const backgroundColors = currentTheme.backgroundColors.map(hexToRgb) // Convert hex colors to RGB arrays
  const maxDepth = Math.max(...[...elements].map(calculateDepth)) // Calculate the maximum depth

  elements.forEach((element) => {
    const depth = calculateDepth(element)
    const factor = depth / maxDepth // Factor between 0 and 1 based on depth
    const colorIndex = Math.min(
      Math.floor(factor * (backgroundColors.length - 1)),
      backgroundColors.length - 2,
    )
    const interpolatedColor = interpolateColor(
      backgroundColors[colorIndex],
      backgroundColors[colorIndex + 1],
      factor * (backgroundColors.length - 1) - colorIndex,
    )

    const rgbColor = interpolatedColor // Already in RGB array format

    const textColor = getContrastingTextColor(rgbColor) // Get high contrast text color

    // type check for element
    if (!(element instanceof HTMLElement)) {
      return
    }
    // only set the background color if the element already has a background color set
    if (element.computedStyleMap().get('background-color')) {
      const bgStyle = element.computedStyleMap().get('background-color')?.toString()
      let alpha = '1'

      // get alpha value of the background color
      if (bgStyle?.includes('rgba')) {
        alpha =
          element.computedStyleMap().get('background-color')?.toString().split(',').pop() ?? '1'
      }
      // remove parantheses
      alpha = alpha?.replace(')', '')

      // set the background color with the alpha value
      element.style.backgroundColor = `rgba(${rgbColor.join(',')}, ${alpha})`
      // console.log(element.computedStyleMap().get('background-color').toString())
      // element.style.backgroundColor = backgroundColor
    }

    element.style.color = textColor // Apply contrasting text color
    element.style.borderRadius = '0px' // square corners
  })
  // set body background color
  const body = document.body
  const html = document.documentElement
  const bodyBackgroundColor = backgroundColors[0]
  body.style.backgroundColor = `rgb(${bodyBackgroundColor.join(',')})`
  html.style.backgroundColor = `rgb(${bodyBackgroundColor.join(',')})`
}

// Helper function to apply full-screen effects
function triggerFullScreenEffect() {
  const effectDiv = document.createElement('div')
  effectDiv.className = 'full-screen-effect'
  effectDiv.style.position = 'fixed'
  effectDiv.style.top = '0'
  effectDiv.style.left = '0'
  effectDiv.style.width = '100vw'
  effectDiv.style.height = '100vh'
  effectDiv.style.pointerEvents = 'none' // Allow interactions to pass through
  effectDiv.style.zIndex = '9999'
  effectDiv.style.background = currentTheme.fullScreenEffectBackground // Effect background (e.g., burst, confetti)
  effectDiv.style.opacity = '0'
  effectDiv.style.transition = 'opacity 1s ease'

  document.body.appendChild(effectDiv)

  // Fade in and then fade out
  setTimeout(() => {
    effectDiv.style.opacity = '1'
    setTimeout(() => {
      effectDiv.style.opacity = '0'
      setTimeout(() => {
        effectDiv.remove()
      }, 1000)
    }, 500) // Duration of the effect being visible
  }, 10)
}

// Trigger full-screen effects randomly or on interaction
function setupFullScreenEffects() {
  // Trigger on click or periodically (you can choose how to trigger this)
  // document.addEventListener('click', () => triggerFullScreenEffect())
}

// Helper function to apply page-wide animations
function applyPageWideAnimation() {
  const body = document.body
  body.style.animation = currentTheme.pageWideAnimation // Apply the animation to the body
}

// Call this function to apply the page-wide animation when the theme is applied
function setupPageWideAnimations() {
  applyPageWideAnimation() // Apply animation to the body
}

// Function to apply click animations
function applyClickAnimations() {
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLElement)) {
      return
    }
    currentTheme.clickAnimation(event.target)
  })
}

// Function to observe for dynamically added elements
function observeDynamicChanges() {
  const observer = new MutationObserver(() => {
    applyDynamicBackgroundAndTextColors()
    applyImageFilters()
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

// Apply the theme
function applyTheme() {
  document.body.style.opacity = '1'
  applyImageFilters()
  applyTextDecorations()
  changeCursor()
  applyClickAnimations()
  observeDynamicChanges() // Handle dynamic content
  applyDynamicBackgroundAndTextColors() // Apply dynamic background colors
  hideLoadingOverlay()
  applyContinuousAnimations()
  setupPageWideAnimations()
  setupFullScreenEffects()
  injectCustomStyles()
}

// Run the theme application on page load
window.onload = applyTheme
