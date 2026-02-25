# MotionComponent

Componente Vue para animações usando motion-v. Permite criar animações fluidas e configuráveis.

## Instalação

Certifique-se de que o motion-v está instalado:

```bash
npm install motion-v
```

## Uso Básico

```vue
<template>
  <MotionComponent animation="fade" duration="1">
    <div>Conteúdo animado</div>
  </MotionComponent>
</template>

<script setup>
import MotionComponent from '~/components/MotionComponent.vue'
</script>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `animation` | `'fade' \| 'slide' \| 'scale' \| 'rotate' \| 'bounce' \| 'flip'` | `'fade'` | Tipo de animação |
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'in' \| 'out'` | `'up'` | Direção da animação (para slide/flip) |
| `duration` | `number` | `0.5` | Duração em segundos |
| `delay` | `number` | `0` | Delay antes da animação em segundos |
| `easing` | `string` | `'ease-out'` | Função de easing |
| `distance` | `number` | `50` | Distância para animações slide (px) |
| `scale` | `number` | `1.05` | Fator de escala |
| `rotate` | `number` | `0` | Graus de rotação |
| `hover` | `boolean` | `false` | Ativar animação no hover |
| `tap` | `boolean` | `false` | Ativar animação no click/tap |
| `loop` | `boolean \| number` | `false` | Loop infinito ou número de repetições |
| `initial` | `Record<string, any>` | - | Estado inicial customizado |
| `animate` | `Record<string, any>` | - | Estado de animação customizado |

## Exemplos

### Fade In
```vue
<MotionComponent animation="fade" duration="1">
  <h1>Olá Mundo!</h1>
</MotionComponent>
```

### Slide da esquerda
```vue
<MotionComponent animation="slide" direction="left" duration="0.8">
  <p>Texto deslizando</p>
</MotionComponent>
```

### Scale com hover
```vue
<MotionComponent animation="scale" scale="1.2" hover>
  <button>Botão animado</button>
</MotionComponent>
```

### Rotação infinita
```vue
<MotionComponent animation="rotate" rotate="360" duration="2" loop easing="linear">
  <div class="spinner">⟲</div>
</MotionComponent>
```

### Bounce com delay
```vue
<MotionComponent animation="bounce" duration="1" delay="0.5">
  <div>Notificação</div>
</MotionComponent>
```

### Flip vertical
```vue
<MotionComponent animation="flip" direction="up" duration="1.2">
  <div>Card virando</div>
</MotionComponent>
```

### Tap effect
```vue
<MotionComponent animation="scale" tap duration="0.2">
  <button>Clique aqui</button>
</MotionComponent>
```

## Animações Disponíveis

- **fade**: Aparece/desaparece gradualmente
- **slide**: Desliza da direção especificada
- **scale**: Aumenta/diminui de tamanho
- **rotate**: Rotaciona no eixo Z
- **bounce**: Efeito de bounce (quique)
- **flip**: Virada 3D no eixo X ou Y

## Direções Disponíveis

- **up/down/left/right**: Para slide e flip
- **in/out**: Para scale (in = cresce, out = diminui)

## Easing Functions

- `'ease'`, `'ease-in'`, `'ease-out'`, `'ease-in-out'`
- `'linear'`, `'bounce'`
- Ou qualquer função de easing customizada

## Slots

O componente aceita conteúdo através do slot padrão:

```vue
<MotionComponent animation="fade">
  <!-- Seu conteúdo aqui -->
  <div>Qualquer elemento HTML</div>
  <img src="..." alt="..." />
</MotionComponent>
```

## Configuração Global

Para configurar o motion-v globalmente, adicione ao `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    // outros módulos
  ],
  motion: {
    // configurações globais do motion-v
  }
})
```

## Dicas

1. Use `delay` para criar sequências de animações
2. Combine `hover` e `tap` para interações ricas
3. Use `loop` para animações contínuas como spinners
4. O componente automaticamente calcula os estados inicial e final baseado nas props
5. Para animações customizadas, use as props `initial` e `animate`