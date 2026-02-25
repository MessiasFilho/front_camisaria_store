export interface MotionComponentProps {
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'flip'
  direction?: 'up' | 'down' | 'left' | 'right' | 'in' | 'out'
  duration?: number
  delay?: number
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'bounce' | string
  distance?: number
  scale?: number
  rotate?: number
  hover?: boolean
  tap?: boolean
  loop?: boolean | number
  initial?: Record<string, any>
  animate?: Record<string, any>
}

export type AnimationType = NonNullable<MotionComponentProps['animation']>
export type DirectionType = NonNullable<MotionComponentProps['direction']>
export type EasingType = NonNullable<MotionComponentProps['easing']>