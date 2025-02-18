import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Polyline points="7 8 3 12 7 16" stroke={color} />
      <Line x1="21" x2="11" y1="12" y2="12" stroke={color} />
      <Line x1="21" x2="11" y1="6" y2="6" stroke={color} />
      <Line x1="21" x2="11" y1="18" y2="18" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Outdent'

export const Outdent = memo<IconProps>(themed(Icon))
