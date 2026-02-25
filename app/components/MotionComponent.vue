<template>
  <motion.div
    :initial="initialState"
    :animate="animateState"
    :transition="transitionConfig"
    :while-hover="hoverConfig"
    :while-tap="tapConfig"
    class="motion-wrapper"
  >
    <slot />
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { MotionComponentProps } from '@/types/motion'

interface Props extends MotionComponentProps {
  // Tipo de animação
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'flip'

  // Direção (para slide, flip, etc)
  direction?: 'up' | 'down' | 'left' | 'right' | 'in' | 'out'

  // Tempo/duração em segundos
  duration?: number

  // Delay antes da animação em segundos
  delay?: number

  // Tipo de easing
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'bounce' | string

  // Configurações adicionais
  distance?: number // Distância para slide (px)
  scale?: number // Fator de escala
  rotate?: number // Graus de rotação

  // Estados especiais
  hover?: boolean // Ativar animação no hover
  tap?: boolean // Ativar animação no click/tap

  // Loop da animação
  loop?: boolean | number // false, true ou número de repetições

  // Estado inicial customizado
  initial?: Record<string, any>

  // Estado de animação customizado
  animate?: Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fade',
  direction: 'up',
  duration: 0.5,
  delay: 0,
  easing: 'ease-out',
  distance: 50,
  scale: 1.05,
  rotate: 0,
  hover: false,
  tap: false,
  loop: false
})

// Configuração do estado inicial baseado no tipo de animação
const initialState = computed(() => {
  if (props.initial) return props.initial

  switch (props.animation) {
    case 'fade':
      return { opacity: 0 }
    case 'slide':
      const slideDirection = {
        up: { y: props.distance },
        down: { y: -props.distance },
        left: { x: props.distance },
        right: { x: -props.distance },
        in: { scale: 0.8 },
        out: { scale: 1.2 }
      }
      return { opacity: 0, ...slideDirection[props.direction!] }
    case 'scale':
      return { scale: 0 }
    case 'rotate':
      return { rotate: 0 }
    case 'bounce':
      return { y: 0 }
    case 'flip':
      const flipDirection = {
        up: { rotateX: 90 },
        down: { rotateX: -90 },
        left: { rotateY: 90 },
        right: { rotateY: -90 }
      }
      return flipDirection[props.direction! as keyof typeof flipDirection] || { rotateX: 90 }
    default:
      return { opacity: 0 }
  }
})

// Configuração do estado de animação
const animateState = computed(() => {
  if (props.animate) return props.animate

  switch (props.animation) {
    case 'fade':
      return { opacity: 1 }
    case 'slide':
      return { opacity: 1, x: 0, y: 0, scale: 1 }
    case 'scale':
      return { scale: props.scale }
    case 'rotate':
      return { rotate: props.rotate }
    case 'bounce':
      return { y: [-10, 0, -5, 0] }
    case 'flip':
      return { rotateX: 0, rotateY: 0 }
    default:
      return { opacity: 1 }
  }
})

// Configuração da transição
const transitionConfig = computed(() => {
  const baseConfig = {
    duration: props.duration,
    delay: props.delay,
    ease: props.easing
  }

  if (props.loop) {
    return {
      ...baseConfig,
      repeat: typeof props.loop === 'number' ? props.loop : Infinity,
      repeatType: 'loop' as const
    }
  }

  return baseConfig
})

// Configuração do hover
const hoverConfig = computed(() => {
  if (!props.hover) return undefined

  switch (props.animation) {
    case 'scale':
      return { scale: props.scale + 0.1 }
    case 'rotate':
      return { rotate: props.rotate + 10 }
    default:
      return { scale: 1.05 }
  }
})

// Configuração do tap
const tapConfig = computed(() => {
  if (!props.tap) return undefined

  switch (props.animation) {
    case 'scale':
      return { scale: props.scale - 0.1 }
    case 'bounce':
      return { y: 5 }
    default:
      return { scale: 0.95 }
  }
})
</script>

<style scoped>
.motion-wrapper {
  display: inline-block;
  width: fit-content;
}
</style>