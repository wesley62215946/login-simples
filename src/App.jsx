import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('A interface está pronta. Conecte o Supabase para habilitar a autenticação.')
  }

  return (
    <main className="page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="brand-mark" aria-hidden="true">L</div>
        <p className="eyebrow">BEM-VINDO DE VOLTA</p>
        <h1 id="login-title">Acesse sua conta</h1>
        <p className="subtitle">Entre com seus dados para continuar.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email" type="email" autoComplete="email" placeholder="voce@exemplo.com"
            value={email} onChange={event => setEmail(event.target.value)} required
          />

          <div className="password-label">
            <label htmlFor="password">Senha</label>
            <button className="text-button" type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          <input
            id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password"
            placeholder="Digite sua senha" value={password}
            onChange={event => setPassword(event.target.value)} required minLength={6}
          />

          <button className="submit-button" type="submit">Entrar <span aria-hidden="true">→</span></button>
        </form>

        <div className="separator"><span>ou</span></div>
        <button className="secondary-button" type="button" onClick={() => setMessage('O cadastro será habilitado junto com a autenticação.')}>
          Criar uma conta
        </button>
        {message && <p className="notice" role="status">{message}</p>}
        <p className="footer-note">Acesso simples. Experiência segura.</p>
      </section>
      <p className="copyright">© {new Date().getFullYear()} Login Simples</p>
    </main>
  )
}