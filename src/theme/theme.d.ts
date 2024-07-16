import '@rneui/themed'

declare module '@rneui/themed' {
  export interface Theme {}

  export interface Colors {
    // Main Color
    MAIN_1: string
    MAIN_2: string

    // Header
    HEADER: string

    // Font Color
    TITLE_1: string
    TITLE_2: string
    TITLE_3: string
    DESCRIPTION: string
    INPUT: string
    PLACEHOLDER: string

    // Button Color
    PRIMARY: string
    WARNING: string
    CANCEL: string

    PRIMARY_TEXT: string
    WARNING_TEXT: string
    CANCEL_TEXT: string

    // Background Color
    BACKGROUND: string

    // Line
    DIVIDER: string
    BORDER: string

    // Overlay background
    OVERLAY_BACKGROUND: string
  }
}
