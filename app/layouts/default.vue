<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Moderno -->
    <header class="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 shadow-xl border-b border-blue-800/20 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Top Bar -->
        <div class="hidden sm:flex justify-between items-center py-2 text-xs text-blue-200">
          <div class="flex items-center space-x-4">
            <span class="flex items-center space-x-1">
              <Phone class="w-3 h-3" />
              <span>(11) 99999-9999</span>
            </span>
            <span class="hidden md:flex items-center space-x-1">
              <Mail class="w-3 h-3" />
              <span>contato@santiago.com</span>
            </span>
          </div>
          <div class="flex items-center space-x-4">
            <span>Frete Grátis acima de R$ 199,90</span>
            <span class="hidden md:block">|</span>
            <span class="hidden md:block">Atendimento 24h</span>
          </div>
        </div>

        <!-- Main Header -->
        <div class="flex justify-between items-center h-16 sm:h-20">
          <!-- Logo -->
          <div class="flex items-center space-x-2 sm:space-x-3">
            <div class="bg-linear-to-br from-blue-400 to-purple-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg">
              <Shirt class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div class="hidden sm:block">
              <h1 class="text-lg sm:text-2xl font-bold text-white tracking-wide">SANTIAGO</h1>
              <p class="text-xs text-blue-200 -mt-1">Camisaria Premium</p>
            </div>
            <div class="sm:hidden">
              <h1 class="text-lg font-bold text-white">SANTIAGO</h1>
            </div>
          </div>

          <!-- Search Bar - Desktop -->
          <div class="hidden md:flex flex-1 max-w-lg mx-8">
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                class="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              >
              <Search class="absolute left-4 top-3.5 w-4 h-4 text-blue-300" />
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-2 sm:space-x-4">
            <!-- Search Mobile -->
            <button class="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200">
              <Search class="w-5 h-5" />
            </button>

            <!-- User Account -->
            <button class="hidden sm:flex items-center space-x-2 p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105">
              <User class="w-5 h-5" />
              <span class="hidden lg:block text-sm font-medium">Minha Conta</span>
            </button>

            <!-- Cart -->
            <button class="relative flex items-center space-x-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-3 sm:px-4 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <ShoppingCart class="w-4 h-4 sm:w-5 sm:h-5" />
              <span class="hidden lg:block text-sm">Carrinho</span>
              <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
                0
              </span>
            </button>

            <!-- Mobile Menu Button -->
            <button
              @click="toggleMobileMenu"
              class="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <Menu v-if="!isMobileMenuOpen" class="w-5 h-5 sm:w-6 sm:h-6" />
              <X v-else class="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Search Bar -->
        <div class="md:hidden px-4 pb-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              class="w-full pl-12 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm"
            >
            <Search class="absolute left-4 top-2.5 w-4 h-4 text-blue-300" />
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="hidden lg:flex items-center justify-center space-x-8 py-4 border-t border-blue-800/20">
          <a href="#" class="group flex items-center space-x-2 text-blue-100 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
            <Home class="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span class="text-white">Home</span>
          </a>
          <a href="#" class="group flex items-center space-x-2 text-blue-100 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
            <User class="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span class="text-white">Masculino</span>
          </a>
          <a href="#" class="group flex items-center space-x-2 text-blue-100 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
            <User class="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span class="text-white">Feminino</span>
          </a>
          <a href="#" class="group flex items-center space-x-2 text-blue-100 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
            <Truck class="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span class="text-white">Fardamento</span>
          </a>
          <a href="#" class="group flex items-center space-x-2 text-blue-100 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
            <Star class="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span class="text-white">Destaques</span>
          </a>
        </nav>

        <!-- Mobile Navigation Menu Overlay -->
        <div
          v-if="isMobileMenuOpen"
          @click="closeMobileMenu"
          class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>

        <!-- Mobile Navigation Menu -->
        <nav
          :class="[
            'lg:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          ]"
        >
          <div class="flex flex-col h-full">
            <!-- Mobile Menu Header -->
            <div class="flex items-center justify-between p-6 border-b border-blue-800/20">
              <div class="flex items-center space-x-3">
                <div class="bg-linear-to-br from-blue-400 to-purple-600 p-2 rounded-lg">
                  <Shirt class="w-6 h-6 text-white" />
                </div>
                <h2 class="text-lg font-bold text-white">Menu</h2>
              </div>
              <button
                @click="closeMobileMenu"
                class="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <X class="w-6 h-6" />
              </button>
            </div>

            <!-- Mobile Menu Links -->
            <div class="flex-1 px-6 py-6 space-y-2">
              <a
                href="#"
                @click="closeMobileMenu"
                class="flex items-center space-x-3 text-blue-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
              >
                <Home class="w-5 h-5" />
                <span>Home</span>
              </a>
              <a
                href="#"
                @click="closeMobileMenu"
                class="flex items-center space-x-3 text-blue-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
              >
                <User class="w-5 h-5" />
                <span>Masculino</span>
              </a>
              <a
                href="#"
                @click="closeMobileMenu"
                class="flex items-center space-x-3 text-blue-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
              >
                <User class="w-5 h-5" />
                <span>Feminino</span>
              </a>
              <a
                href="#"
                @click="closeMobileMenu"
                class="flex items-center space-x-3 text-blue-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
              >
                <Truck class="w-5 h-5" />
                <span>Fardamento</span>
              </a>
              <a
                href="#"
                @click="closeMobileMenu"
                class="flex items-center space-x-3 text-blue-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
              >
                <Star class="w-5 h-5" />
                <span>Destaques</span>
              </a>

              <div class="border-t border-blue-800/20 pt-4 mt-6">
                <a
                  href="#"
                  @click="closeMobileMenu"
                  class="flex items-center space-x-3 text-blue-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
                >
                  <User class="w-5 h-5" />
                  <span>Minha Conta</span>
                </a>
                <a
                  href="#"
                  @click="closeMobileMenu"
                  class="flex items-center space-x-3 text-blue-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium mt-2"
                >
                  <Phone class="w-5 h-5" />
                  <span>Contato</span>
                </a>
              </div>
            </div>

            <!-- Mobile Menu Footer -->
            <div class="border-t border-blue-800/20 p-6">
              <div class="text-center text-blue-200 text-sm">
                <p>&copy; 2025 Santiago Camisaria</p>
                <p class="mt-1">Qualidade e elegância</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-500 text-sm">
          <p>&copy; 2025 Camisaria Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Home, User, Truck, ShoppingCart, Menu, Search, Shirt, Star, Phone, Mail, X } from 'lucide-vue-next'

// Estado reativo para controlar o menu mobile
const isMobileMenuOpen = ref(false)

// Função para toggle do menu mobile
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Fechar menu quando clicar em um link
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Fechar menu com tecla ESC
onMounted(() => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }

  document.addEventListener('keydown', handleEscape)

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Estilos específicos do layout, se necessário */
</style>
