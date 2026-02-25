<template>
  <div class="min-h-screen bg-gray-100 flex flex-col p-4">
     <header>
      <BannerComponet/>
     </header>
     <main class="flex-1">
      <!-- Portfolio Section -->
      <section class="py-20 px-4 bg-gray-50">
        <div class="max-w-7xl mx-auto">


          <div class="space-y-20">
              <!-- Moda Masculina Portfolio -->
              <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div class="bg-blue-800 p-8 text-white">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-3xl font-bold mb-2">Moda Masculina</h3>
                      <p class="text-blue-100 text-lg">Elegância e profissionalismo para o homem contemporâneo</p>
                    </div>
                    <div class="hidden md:flex items-center space-x-4">
                      <div class="bg-blue-700 rounded-full px-4 py-2">
                        <span class="font-semibold">12 Produtos</span>
                      </div>
                      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

              <div class="p-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <!-- Componente de Amostra -->
                  <ShowMaleComponent />

                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-blue-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4V5a1 1 0 011-1h6a1 1 0 011 1v1M5 9h14l1 12H4L5 9z"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 69,90</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Polo Azul Marinho</h4>
                    <p class="text-gray-600 text-sm mb-4">Malha piquet de algodão. Conforto e elegância para o dia a dia profissional.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">M</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">G</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">GG</span>
                    </div>
                    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Adicionar ao Carrinho
                    </button>
                  </div>

                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-blue-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 159,90</div>
                        <div class="text-sm text-green-600 font-medium">Em oferta</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Terno Completo</h4>
                    <p class="text-gray-600 text-sm mb-4">Terno completo em lã fria. Inclui calça, paletó e colete. Perfeito para executivos.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">46</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">48</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">50</span>
                    </div>
                    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>

                <div class="mt-8 text-center">
                  <button class="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Ver Todos os Produtos Masculinos
                  </button>
                </div>
              </div>
            </div>

              <!-- Moda Feminina Portfolio -->
              <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div class="bg-pink-600 p-8 text-white">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-3xl font-bold mb-2">Moda Feminina</h3>
                      <p class="text-pink-100 text-lg">Tendências e elegância para a mulher moderna</p>
                    </div>
                    <div class="hidden md:flex items-center space-x-4">
                      <div class="bg-pink-500 rounded-full px-4 py-2">
                        <span class="font-semibold">15 Produtos</span>
                      </div>
                      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>

              <div class="p-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-pink-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-pink-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 79,90</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Blusa Lisa Rosa</h4>
                    <p class="text-gray-600 text-sm mb-4">Blusa de seda com caimento perfeito. Versátil para trabalho ou eventos.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">P</span>
                      <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">M</span>
                      <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">G</span>
                    </div>
                    <button class="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Adicionar ao Carrinho
                    </button>
                  </div>

                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-pink-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-pink-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 129,90</div>
                        <div class="text-sm text-gray-500 line-through">R$ 159,90</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Vestido Executivo</h4>
                    <p class="text-gray-600 text-sm mb-4">Vestido tubinho em crepe. Sofisticação e conforto para o ambiente corporativo.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">36</span>
                      <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">38</span>
                      <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">40</span>
                    </div>
                    <button class="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Adicionar ao Carrinho
                    </button>
                  </div>

                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-pink-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-pink-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 199,90</div>
                        <div class="text-sm text-pink-600 font-medium">Novo lançamento</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Conjunto Corporativo</h4>
                    <p class="text-gray-600 text-sm mb-4">Conjunto completo: saia, blusa e blazer. Perfeito para executivas modernas.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completo</span>
                    </div>
                    <button class="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>

                <div class="mt-8 text-center">
                  <button class="bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Ver Todos os Produtos Femininos
                  </button>
                </div>
              </div>
            </div>

              <!-- Fardamentos Portfolio -->
              <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div class="bg-green-700 p-8 text-white">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-3xl font-bold mb-2">Fardamentos Corporativos</h3>
                      <p class="text-green-100 text-lg">Uniformes profissionais de alta qualidade e durabilidade</p>
                    </div>
                    <div class="hidden md:flex items-center space-x-4">
                      <div class="bg-green-600 rounded-full px-4 py-2">
                        <span class="font-semibold">8 Produtos</span>
                      </div>
                      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>

              <div class="p-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-green-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 149,90</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Camisa Corporativa</h4>
                    <p class="text-gray-600 text-sm mb-4">Camisa de poliéster com logo bordado. Conforto e durabilidade para o dia a dia.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">M</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">G</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">GG</span>
                    </div>
                    <button class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Solicitar Orçamento
                    </button>
                  </div>

                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-green-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4V5a1 1 0 011-1h6a1 1 0 011 1v1M5 9h14l1 12H4L5 9z"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 89,90</div>
                        <div class="text-sm text-gray-500 line-through">R$ 109,90</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Calça Corporativa</h4>
                    <p class="text-gray-600 text-sm mb-4">Calça em sarja resistente. Corte moderno e confortável para uso prolongado.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">40</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">42</span>
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">44</span>
                    </div>
                    <button class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Solicitar Orçamento
                    </button>
                  </div>

                  <div class="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
                    <div class="flex items-start justify-between mb-4">
                      <div class="bg-green-100 rounded-lg p-3">
                        <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                        </svg>
                      </div>
                      <div class="text-right">
                        <div class="text-2xl font-bold text-gray-900">R$ 249,90</div>
                        <div class="text-sm text-green-600 font-medium">Pacote completo</div>
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Uniforme Completo</h4>
                    <p class="text-gray-600 text-sm mb-4">Conjunto completo: camisa + calça + jaqueta. Identidade visual profissional.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completo</span>
                    </div>
                    <button class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>

                <div class="mt-8 text-center">
                  <button class="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Ver Todos os Fardamentos
                  </button>
                </div>
              </div>
            </div>

            <!-- Stats Section -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div class="stats-card bg-white rounded-xl p-6 shadow-md">
                <div class="text-3xl font-bold text-blue-600 mb-2">35+</div>
                <div class="text-gray-600 font-medium">Produtos</div>
              </div>
              <div class="stats-card bg-white rounded-xl p-6 shadow-md">
                <div class="text-3xl font-bold text-pink-600 mb-2">500+</div>
                <div class="text-gray-600 font-medium">Clientes</div>
              </div>
              <div class="stats-card bg-white rounded-xl p-6 shadow-md">
                <div class="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div class="text-gray-600 font-medium">Empresas</div>
              </div>
              <div class="stats-card bg-white rounded-xl p-6 shadow-md">
                <div class="text-3xl font-bold text-purple-600 mb-2">5★</div>
                <div class="text-gray-600 font-medium">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="py-16 px-4 bg-white">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre a Santiago Camisaria
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Há mais de 20 anos no mercado, a Santiago Camisaria é referência em roupas profissionais
            e uniformes corporativos. Combinamos tradição artesanal com tecnologia moderna para
            oferecer produtos de excepcional qualidade e durabilidade.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p class="text-gray-600">Tecido premium e acabamento impecável</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Entrega Expressa</h3>
              <p class="text-gray-600">Receba em até 3 dias úteis</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Atendimento Premium</h3>
              <p class="text-gray-600">Suporte especializado personalizado</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 px-4 bg-slate-800">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p class="text-xl mb-8 text-slate-300">
            Precisa de um orçamento personalizado ou tem dúvidas sobre nossos produtos?
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-slate-800 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Fale Conosco
            </button>
            <button class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300">
              (11) 99999-9999
            </button>
          </div>
        </div>
      </section>
     </main>
  </div>
</template>

<script setup lang="ts">
import ShowMaleComponent from '~/components/moda_masculina/ShowMaleComponent.vue'
</script>

<style scoped>

</style>