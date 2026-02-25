<template>
  <!-- Banner principal - Desktop -->
  <div class="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-black/10 lg:block hidden">
    <div class="flex h-full transition-transform duration-700 ease-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full h-full relative"
      >
        <div class="flex h-full relative">
          <div class="relative w-3/5 h-full overflow-hidden flex items-center justify-center">
            <img :src="slide.image" :alt="slide.title" class="max-w-full max-h-full object-contain transition-transform duration-500 ease-out hover:scale-105" />
            <div class="absolute inset-0 bg-linear-to-br from-black/30 to-black/10"></div>
          </div>
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-2/5 p-12 text-white z-10 lg:p-8 xl:p-12">
            <h2 class="text-5xl font-bold mb-4 drop-shadow-2xl tracking-tight lg:text-4xl xl:text-5xl">{{ slide.title }}</h2>
            <p class="text-xl mb-8 opacity-90 leading-relaxed lg:text-lg xl:text-xl">{{ slide.description }}</p>
            <button class="bg-linear-to-br from-blue-500 to-purple-600 text-white border-none px-8 py-4 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg shadow-blue-500/30 uppercase tracking-wide hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 hover:from-blue-600 hover:to-purple-700 lg:px-6 lg:py-3 lg:text-base xl:px-8 xl:py-4 xl:text-lg" @click="handleCategoryClick(slide.category)">
              Ver Coleção
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicadores -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="w-3 h-3 rounded-full border-2 border-white/70 bg-transparent cursor-pointer transition-all duration-300 hover:border-white hover:scale-110"
        :class="{ 'bg-white border-white scale-125': index === currentSlide }"
        @click="goToSlide(index)"
      ></button>
    </div>

    <!-- Navegação -->
    <button class="absolute top-1/2 -translate-y-1/2 left-8 bg-white/90 border-none w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 z-20 shadow-lg shadow-black/10 hover:bg-white hover:scale-110 hover:shadow-xl hover:shadow-black/20 lg:left-4 xl:left-8" @click="prevSlide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
    <button class="absolute top-1/2 -translate-y-1/2 right-8 bg-white/90 border-none w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 z-20 shadow-lg shadow-black/10 hover:bg-white hover:scale-110 hover:shadow-xl hover:shadow-black/20 lg:right-4 xl:right-8" @click="nextSlide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  </div>

  <!-- Banner mobile -->
  <div class="relative w-full h-[400px] overflow-hidden rounded-xl shadow-2xl shadow-black/10 lg:hidden">
    <div class="flex h-full transition-transform duration-700 ease-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full h-full relative flex flex-col"
      >
        <div class="relative w-full h-3/5 overflow-hidden flex items-center justify-center">
          <img :src="slide.image" :alt="slide.title" class="max-w-full max-h-full object-contain transition-transform duration-500 ease-out hover:scale-105" />
          <div class="absolute inset-0 bg-linear-to-br from-black/30 to-black/10"></div>
        </div>
        <div class="w-full h-2/5 p-6 text-white text-center">
          <h2 class="text-3xl font-bold mb-2 drop-shadow-2xl tracking-tight sm:text-4xl">{{ slide.title }}</h2>
          <p class="text-base mb-6 opacity-90 leading-relaxed sm:text-lg">{{ slide.description }}</p>
          <button class="bg-linear-to-br from-blue-500 to-purple-600 text-white border-none px-6 py-3 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 shadow-lg shadow-blue-500/30 uppercase tracking-wide hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 hover:from-blue-600 hover:to-purple-700 sm:px-8 sm:py-4 sm:text-lg" @click="handleCategoryClick(slide.category)">
            Ver Coleção
          </button>
        </div>
      </div>
    </div>

    <!-- Indicadores mobile -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="w-3 h-3 rounded-full border-2 border-white/70 bg-transparent cursor-pointer transition-all duration-300 hover:border-white hover:scale-110"
        :class="{ 'bg-white border-white scale-125': index === currentSlide }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
    <!-- Faixa de Anúncios Rolante -->
    <div class="bg-linear-to-br from-blue-500 to-purple-600 text-white overflow-hidden relative h-12 flex items-center shadow-lg shadow-black/10 sm:h-11 md:h-12">
    <div class="flex items-center whitespace-nowrap animate-scroll-left hover:pause px-4 sm:px-6 md:px-8">
      <div class="flex items-center mr-8 sm:mr-10 md:mr-12 flex-shrink-0" v-for="(partner, index) in partners" :key="index">
        <div class="flex items-center gap-2 sm:gap-3 font-medium text-xs sm:text-sm">
          <div class="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white/30 hover:scale-110" v-html="partner.icon"></div>
          <span class="font-semibold tracking-wide">{{ partner.name }}</span>
          <span v-if="partner.discount" class="bg-red-500 text-white px-1.5 py-0.5 sm:px-2 rounded-lg text-xs font-bold animate-pulse">{{ partner.discount }}</span>
          <span v-if="partner.news" class="bg-teal-400 text-white px-1.5 py-0.5 sm:px-2 rounded-lg text-xs font-bold animate-bounce">{{ partner.news }}</span>
        </div>
      </div>
      <!-- Duplicar o conteúdo para efeito de rolagem infinita -->
      <div class="flex items-center mr-8 sm:mr-10 md:mr-12 flex-shrink-0" v-for="(partner, index) in partners" :key="`dup-${index}`">
        <div class="flex items-center gap-2 sm:gap-3 font-medium text-xs sm:text-sm">
          <div class="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white/30 hover:scale-110" v-html="partner.icon"></div>
          <span class="font-semibold tracking-wide">{{ partner.name }}</span>
          <span v-if="partner.discount" class="bg-red-500 text-white px-1.5 py-0.5 sm:px-2 rounded-lg text-xs font-bold animate-pulse">{{ partner.discount }}</span>
          <span v-if="partner.news" class="bg-teal-400 text-white px-1.5 py-0.5 sm:px-2 rounded-lg text-xs font-bold animate-bounce">{{ partner.news }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  image: string
  title: string
  description: string
  category: string
}

interface Partner {
  name: string
  icon: string
  discount?: string
  news?: string
}

const slides = ref<Slide[]>([
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    title: 'Moda Feminina',
    description: 'Descubra as últimas tendências em moda feminina',
    category: 'feminino'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    title: 'Moda Masculina',
    description: 'Estilo e elegância para o homem moderno',
    category: 'masculino'
  },
  {
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
    title: 'Fardamentos',
    description: 'Uniformes profissionais de alta qualidade',
    category: 'fardamentos'
  }
])

const partners = ref<Partner[]>([
  {
    name: 'TechCorp',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    discount: '15% OFF'
  },
  {
    name: 'FashionHub',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9.96h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
    news: 'Coleção Nova!'
  },
  {
    name: 'BuildMaster',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',
    discount: '20% OFF'
  },
  {
    name: 'HealthCare Plus',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    news: 'Novos Produtos'
  },
  {
    name: 'EduTech',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"/><path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>',
    discount: '10% OFF'
  },
  {
    name: 'SportZone',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h-.01"/></svg>',
    news: 'Oferta Especial!'
  }
])

const currentSlide = ref(0)
const autoPlayInterval = ref<number | null>(null)
const autoPlayDelay = 5000 // 5 segundos

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0
    ? slides.value.length - 1
    : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const handleCategoryClick = (category: string) => {
  // Aqui você pode implementar navegação para a categoria específica
  console.log('Navegando para categoria:', category)
  // Exemplo: router.push(`/categoria/${category}`)
}

const startAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, autoPlayDelay)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {

})

</script>