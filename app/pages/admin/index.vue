<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Logo e Título -->
      <div class="login-header">
        <div class="logo">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="logo-icon">
            <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9.96h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
          </svg>
        </div>
        <h1 class="login-title">Painel Administrativo</h1>
        <p class="login-subtitle">Acesse sua conta para gerenciar a loja</p>
      </div>

      <!-- Formulário de Login -->
      <form @submit.prevent="handleLogin" class="login-form">

        <div class="form-group">
          <h1>teste</h1>
          <label for="email" class="form-label">E-mail</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="admin@lojadecamisas.com"
              :class="{ 'error': errors.email }"
              required
            />
          </div>
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Senha</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <circle cx="12" cy="16" r="1"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="form-input"
              placeholder="Digite sua senha"
              :class="{ 'error': errors.password }"
              required
            />
            <button
              type="button"
              class="password-toggle"
              @click="togglePasswordVisibility"
              :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
            >
              <svg v-if="showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>

        <button type="submit" class="login-button" :disabled="isLoading">
          <span v-if="isLoading" class="loading-spinner"></span>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="login-icon">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
            <polyline points="10,17 15,12 10,7"/>
            <line x1="15" y1="12" x2="3" y2="12"/>
          </svg>
          {{ isLoading ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>

      <!-- Links adicionais -->
      <div class="login-footer">
        <p class="login-footer-text">
          Precisa de ajuda?
          <a href="#" class="support-link">Fale conosco</a>
        </p>
      </div>
    </div>

    <!-- Fundo decorativo -->
    <div class="background-decoration">
      <div class="decoration-circle circle-1"></div>
      <div class="decoration-circle circle-2"></div>
      <div class="decoration-circle circle-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

definePageMeta({
    layout: false
})

interface LoginForm {
  email: string
  password: string
  remember: boolean
}

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

const form = reactive<LoginForm>({
  email: '',
  password: '',
  remember: false
})

const errors = reactive<FormErrors>({})
const isLoading = ref(false)
const showPassword = ref(false)

const validateForm = (): boolean => {
  errors.email = ''
  errors.password = ''
  errors.general = ''

  if (!form.email) {
    errors.email = 'E-mail é obrigatório'
    return false
  }

  if (!form.email.includes('@')) {
    errors.email = 'E-mail inválido'
    return false
  }

  if (!form.password) {
    errors.password = 'Senha é obrigatória'
    return false
  }

  if (form.password.length < 6) {
    errors.password = 'Senha deve ter pelo menos 6 caracteres'
    return false
  }

  return true
}

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    // Simular chamada da API
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Aqui você implementaria a lógica real de autenticação
    console.log('Login attempt:', { email: form.email, remember: form.remember })

    // Simular sucesso
    if (form.email === 'admin@lojadecamisas.com' && form.password === 'admin123') {
      // Salvar token (exemplo)
      localStorage.setItem('admin_token', 'fake_token_123')

      // Redirecionar para dashboard
      router.push('/admin/dashboard')
    } else {
      errors.general = 'E-mail ou senha incorretos'
    }

  } catch (error) {
    errors.general = 'Erro ao fazer login. Tente novamente.'
  } finally {
    isLoading.value = false
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem 1rem;
}

.login-container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 420px;
  padding: 3rem 2.5rem;
  position: relative;
  z-index: 10;
}

/* Header */
.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.logo-icon {
  color: #667eea;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
}

.login-subtitle {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}

/* Formulário */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: #9ca3af;
  z-index: 1;
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f9fafb;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: #ef4444;
}

.form-input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.password-toggle {
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.password-toggle:hover {
  color: #667eea;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Opções do formulário */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
  color: #6b7280;
  position: relative;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  height: 18px;
  width: 18px;
  background-color: #f3f4f6;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  margin-right: 0.5rem;
  position: relative;
  transition: all 0.2s ease;
}

.checkbox-container:hover .checkmark {
  border-color: #667eea;
}

.checkbox-container .checkbox-input:checked ~ .checkmark {
  background-color: #667eea;
  border-color: #667eea;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container .checkbox-input:checked ~ .checkmark:after {
  display: block;
}

.forgot-password {
  color: #667eea;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.forgot-password:hover {
  color: #5a67d8;
  text-decoration: underline;
}

/* Botão de login */
.login-button {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.login-icon {
  transition: transform 0.2s ease;
}

.login-button:hover:not(:disabled) .login-icon {
  transform: translateX(3px);
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Footer */
.login-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.login-footer-text {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}

.support-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.support-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

/* Fundo decorativo */
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: -75px;
  animation-delay: 2s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  bottom: -50px;
  left: 20%;
  animation-delay: 4s;
}

/* Responsividade */
@media (max-width: 480px) {
  .login-page {
    padding: 1rem;
  }

  .login-container {
    padding: 2rem 1.5rem;
  }

  .login-title {
    font-size: 1.75rem;
  }

  .form-options {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .login-button {
    padding: 0.875rem 1rem;
  }
}

/* Animação de erro */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.form-input.error {
  animation: shake 0.5s ease-in-out;
}

/* Estilo para erro geral */
.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fecaca;
}
</style>