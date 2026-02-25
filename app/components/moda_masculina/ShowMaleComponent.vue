<template>
  <MotionComponent animation="slide" direction="up" :duration="0.8" :delay="0.2">
    <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
    <!-- Imagem do Produto -->
    <div class="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
      <div class="text-blue-400 text-6xl">
        <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    </div>

    <!-- Conteúdo do Card -->
    <div class="p-6">
      <!-- Nome do Produto -->
      <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
        Camisa Social Premium
      </h3>

      <!-- Descrição -->
      <p class="text-gray-600 text-sm leading-relaxed">
        Camisa social confeccionada em algodão egípcio de alta qualidade, com acabamento refinado e caimento perfeito para o dia a dia profissional.
      </p>
    </div>
    </div>
  </MotionComponent>
</template>

<script setup lang="ts">
import MotionComponent from '~/components/MotionComponent.vue'

// Props opcionais para customização
interface Props {
  productName?: string
  description?: string
  image?: string
}

const props = withDefaults(defineProps<Props>(), {
  productName: 'Camisa Social Premium',
  description: 'Camisa social confeccionada em algodão egípcio de alta qualidade, com acabamento refinado e caimento perfeito para o dia a dia profissional.',
  image: ''
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>