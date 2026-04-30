'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Obrigado! Você se inscreveu com: ${email}`)
    setEmail('')
  }

  return (
    <div style={{ fontFamily: 'system-ui', background: '#f5f5f5' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #1B2A4A 0%, #2a3f5f 100%)',
        color: 'white',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: '0', fontSize: '1.5rem' }}>📚 Bizu do Cadete</h1>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#features" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Recursos</a>
            <a href="#pricing" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Preços</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}>Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1B2A4A 0%, #2a3f5f 100%)',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>Prepare-se para Concursos</h2>
          <p style={{ fontSize: '1.2rem', margin: '0 0 2rem 0', color: 'rgba(255,255,255,0.9)' }}>
            Milhares de questões, simulados e análises para você conquistar sua aprovação
          </p>
          <button style={{
            background: '#FFC107',
            color: '#1B2A4A',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Começar Agora
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#1B2A4A', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Nossos Recursos</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { icon: '📝', title: 'Milhares de Questões', desc: 'Acesso a um banco com milhares de questões de concursos' },
            { icon: '📊', title: 'Análise de Desempenho', desc: 'Acompanhe seu progresso com relatórios detalhados' },
            { icon: '🎯', title: 'Simulados Realistas', desc: 'Simulados que reproduzem o ambiente real de prova' },
            { icon: '📱', title: 'Acesso em Qualquer Lugar', desc: 'Estude no computador, tablet ou celular' },
            { icon: '🏆', title: 'Comunidade Ativa', desc: 'Compartilhe experiências com outros candidatos' },
            { icon: '⚡', title: 'Atualizações Constantes', desc: 'Novos conteúdos e questões adicionadas regularmente' }
          ].map((feature, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ color: '#1B2A4A', margin: '0 0 0.5rem 0' }}>{feature.title}</h3>
              <p style={{ color: '#666', margin: '0' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ background: '#f0f0f0', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: '#1B2A4A', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Planos e Preços</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: 'Básico', price: 'R$ 29', features: ['Acesso a 5.000 questões', 'Análise básica', 'Suporte por email'] },
              { name: 'Pro', price: 'R$ 79', features: ['Acesso a 15.000 questões', 'Análise completa', 'Simulados ilimitados', 'Suporte prioritário'], highlight: true },
              { name: 'Premium', price: 'R$ 149', features: ['Acesso a todas as questões', 'Análise avançada', 'Simulados ilimitados', 'Suporte 24/7', 'Mentoria individual'] }
            ].map((plan, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: plan.highlight ? '3px solid #1B2A4A' : 'none',
                transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s'
              }}>
                <h3 style={{ color: '#1B2A4A', margin: '0 0 1rem 0' }}>{plan.name}</h3>
                <div style={{ fontSize: '2rem', color: '#1B2A4A', fontWeight: 'bold', marginBottom: '1rem' }}>{plan.price}/mês</div>
                <ul style={{ listStyle: 'none', padding: '0', margin: '1rem 0' }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{ color: '#666', padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>✓ {feature}</li>
                  ))}
                </ul>
                <button style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: '#1B2A4A',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  marginTop: '1rem'
                }}>
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" style={{ background: '#1B2A4A', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 1rem 0' }}>Fique por Dentro das Novidades</h2>
          <p style={{ margin: '0 0 2rem 0', color: 'rgba(255,255,255,0.9)' }}>
            Receba dicas, novos conteúdos e promoções exclusivas
          </p>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              style={{
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#FFC107',
                color: '#1B2A4A',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f1a2f',
        color: 'white',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: '0' }}>&copy; 2026 Bizu do Cadete. Todos os direitos reservados.</p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacidade</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Termos</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
