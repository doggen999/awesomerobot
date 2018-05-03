import { configurationConstants } from '../../constants'

export const configLanguage = lang => ({
  type: configurationConstants.CONFIG_LANGUAGE,
  lang: lang
})

export const configShape = shape => ({
  type: configurationConstants.CONFIG_SHAPE,
  shape: shape
})

export const configWidth = widht => ({
  type: configurationConstants.CONFIG_WIDTH,
  width: widht
})

export const configurHeight = height => ({
  type: configurationConstants.CONFIG_HEIGHT,
  height: height
})

export const configRadius = radius => ({
  type: configurationConstants.CONFIG_RADIUS,
  radius: radius
})
