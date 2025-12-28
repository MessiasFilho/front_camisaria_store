<template>


  <div class="banner-container">
    <div class="banner-slider" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <div class="slide-content">
          <div class="slide-image">
            <img :src="slide.image" :alt="slide.title" />
            <div class="slide-overlay"></div>
          </div>
          <div class="slide-info">
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-description">{{ slide.description }}</p>
            <button class="slide-button" @click="handleCategoryClick(slide.category)">
              Ver Coleção
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicadores -->
    <div class="indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></button>
    </div>

    <!-- Navegação -->
    <button class="nav-button prev" @click="prevSlide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
    <button class="nav-button next" @click="nextSlide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  </div>
    <!-- Faixa de Anúncios Rolante -->
    <div class="announcement-ticker">
    <div class="ticker-content">
      <div class="ticker-item" v-for="(partner, index) in partners" :key="index">
        <div class="partner-info">
          <div class="partner-icon" v-html="partner.icon"></div>
          <span class="partner-name">{{ partner.name }}</span>
          <span v-if="partner.discount" class="partner-discount">{{ partner.discount }}</span>
          <span v-if="partner.news" class="partner-news">{{ partner.news }}</span>
        </div>
      </div>
      <!-- Duplicar o conteúdo para efeito de rolagem infinita -->
      <div class="ticker-item" v-for="(partner, index) in partners" :key="`dup-${index}`">
        <div class="partner-info">
          <div class="partner-icon" v-html="partner.icon"></div>
          <span class="partner-name">{{ partner.name }}</span>
          <span v-if="partner.discount" class="partner-discount">{{ partner.discount }}</span>
          <span v-if="partner.news" class="partner-news">{{ partner.news }}</span>
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
  stopAutoPlay()
})
</script>

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.banner-slider {
  display: flex;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.slide-content {
  display: flex;
  height: 100%;
  position: relative;
}

.slide-image {
  position: relative;
  width: 60%;
  height: 100%;
  overflow: hidden;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.slide:hover .slide-image img {
  transform: scale(1.05);
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
}

.slide-info {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  padding: 3rem;
  color: white;
  z-index: 2;
}

.slide-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
}

.slide-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.slide-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.slide-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a6fd8 0%, #6b4190 100%);
}

/* Indicadores */
.indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  border-color: white;
  transform: scale(1.2);
}

.indicator:hover {
  border-color: white;
  transform: scale(1.1);
}

/* Botões de navegação */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 3;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.nav-button:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.nav-button.prev {
  left: 2rem;
}

.nav-button.next {
  right: 2rem;
}

/* Responsividade */
@media (max-width: 1024px) {
  .slide-info {
    width: 50%;
    padding: 2rem;
  }

  .slide-title {
    font-size: 2.5rem;
  }

  .slide-description {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .banner-container {
    height: 400px;
  }

  .slide-content {
    flex-direction: column;
  }

  .slide-image {
    width: 100%;
    height: 60%;
  }

  .slide-info {
    position: static;
    width: 100%;
    height: 40%;
    padding: 2rem 1.5rem;
    transform: none;
    text-align: center;
  }

  .slide-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .slide-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .nav-button {
    display: none;
  }

  .indicators {
    bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .banner-container {
    height: 350px;
    border-radius: 12px;
  }

  .slide-info {
    padding: 1.5rem 1rem;
  }

  .slide-title {
    font-size: 1.8rem;
  }

  .slide-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

/* Faixa de Anúncios Rolante */
.announcement-ticker {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.ticker-content {
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scroll-left 30s linear infinite;
  padding: 0 2rem;
}

.ticker-content:hover {
  animation-play-state: paused;
}

.ticker-item {
  display: flex;
  align-items: center;
  margin-right: 3rem;
  flex-shrink: 0;
}

.partner-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  font-size: 0.95rem;
}

.partner-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.partner-icon:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.partner-icon svg {
  width: 16px;
  height: 16px;
}

.partner-name {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.partner-discount {
  background: #ff6b6b;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  animation: pulse 2s infinite;
}

.partner-news {
  background: #4ecdc4;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  animation: bounce 2s infinite;
}

/* Animações */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
}

/* Responsividade para a faixa */
@media (max-width: 768px) {
  .announcement-ticker {
    height: 45px;
  }

  .ticker-content {
    animation-duration: 20s;
    padding: 0 1rem;
  }

  .ticker-item {
    margin-right: 2rem;
  }

  .partner-info {
    gap: 0.5rem;
    font-size: 0.85rem;
  }

  .partner-icon {
    width: 28px;
    height: 28px;
  }

  .partner-icon svg {
    width: 14px;
    height: 14px;
  }

  .partner-discount,
  .partner-news {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .announcement-ticker {
    height: 40px;
  }

  .ticker-content {
    animation-duration: 15s;
  }

  .ticker-item {
    margin-right: 1.5rem;
  }

  .partner-info {
    font-size: 0.8rem;
  }
}
</style>