/**
 * ============================================
 * FLUXI - Configuração do Supabase
 * ============================================
 *
 * Este arquivo configura a conexão com o Supabase
 *
 * IMPORTANTE:
 * 1. Crie uma conta gratuita em https://supabase.com
 * 2. Crie um novo projeto
 * 3. Vá em Settings > API
 * 4. Copie a "URL" e a "anon public" key
 * 5. Substitua os valores abaixo
 */

// ============================================
// CONFIGURAÇÕES - SUBSTITUA PELOS SEUS VALORES
// ============================================

const SUPABASE_URL = 'https://seu-projeto.supabase.co'
const SUPABASE_ANON_KEY = 'sua-chave-anonima-aqui'

// ============================================
// VALIDAÇÃO DAS CREDENCIAIS
// ============================================

if (SUPABASE_URL === 'https://seu-projeto.supabase.co' ||
    SUPABASE_ANON_KEY === 'sua-chave-anonima-aqui') {
  console.error(
    '⚠️ ERRO: Credenciais do Supabase não configuradas!\n\n' +
    'Por favor, edite o arquivo js/config/supabase-config.js\n' +
    'e adicione suas credenciais do Supabase.\n\n' +
    'Instruções:\n' +
    '1. Acesse https://supabase.com\n' +
    '2. Crie/acesse seu projeto\n' +
    '3. Vá em Settings > API\n' +
    '4. Copie a URL e a anon key\n' +
    '5. Cole no arquivo supabase-config.js'
  )
}

// ============================================
// INICIALIZAÇÃO DO CLIENTE SUPABASE
// ============================================

// Importa o cliente Supabase do CDN
// Certifique-se de que o script está carregado no HTML:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

let supabase = null

// Função para inicializar o Supabase
function initSupabase() {
  if (typeof window.supabase === 'undefined') {
    console.error('❌ Supabase JS não foi carregado! Adicione o script CDN no HTML.')
    return null
  }

  try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    console.log('✅ Supabase inicializado com sucesso!')
    return supabase
  } catch (error) {
    console.error('❌ Erro ao inicializar Supabase:', error)
    return null
  }
}

// Inicializar automaticamente quando o script é carregado
if (typeof window !== 'undefined') {
  // Se estamos no navegador, esperar o DOM carregar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSupabase)
  } else {
    initSupabase()
  }
}

// ============================================
// EXPORTAR CONFIGURAÇÕES
// ============================================

// Para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUPABASE_URL, SUPABASE_ANON_KEY, supabase }
}
