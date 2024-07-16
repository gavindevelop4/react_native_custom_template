import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native'

// width of UI design
const DESIGN_WIDTH = 375

// height of UI design
const DESIGN_HEIGHT = 812

const styleUtils = {
  // screen width of device
  getScreenWidth() {
    return Dimensions.get('screen').width
  },

  // screen height of device
  getScreenHeight() {
    if (Platform.OS === 'android') {
      return Dimensions.get('screen').height - this.getStatusBarHeight()
    }

    return Dimensions.get('screen').height
  },

  // responsive width
  getWidth(width: number): number {
    const widthPixelRatio = this.getScreenWidth() / DESIGN_WIDTH
    return width * widthPixelRatio
  },

  // responsive height
  getHeight(height: number): number {
    const heightPixelRatio = this.getScreenHeight() / DESIGN_HEIGHT
    return height * heightPixelRatio
  },

  // responsive font size
  getFontSize(fontSize: number): number {
    const widthPixelRatio = this.getScreenWidth() / DESIGN_WIDTH
    return (fontSize * widthPixelRatio) / PixelRatio.getFontScale()
  },

  // get status bar height
  getStatusBarHeight(): number {
    return StatusBar.currentHeight || 20
  },

  hexToRgba(hexString: string, opacty?: number): string {
    let hex = hexString.slice(1)
    let a = opacty || 1
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }
    if (hex.length === 8) {
      if (!opacty) {
        a = Math.floor((parseInt(hex.slice(6), 16) / 255) * 10000) / 10000
      }
      hex = hex.slice(0, 6)
    }
    const bigint = parseInt(hex, 16)

    const r = (bigint >> 16) & 255,
      g = (bigint >> 8) & 255,
      b = bigint & 255

    return `rgba(${r}, ${g}, ${b}, ${a})`
  },
}

export default styleUtils
