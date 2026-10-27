import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { COMPANY } from '../lib/site'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [firm, setFirm] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function submit(event: FormEvent) {
    event.preventDefault()
    setError('')
    if (!name.trim() || !email.includes('@') || !message.trim()) {
      setError('Tell us your name, a working email, and what you need.')
      return
    }
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Talk to the people who issue the keys.</h1>
          <p className="lede">
            Dummy details for this preview. Use the form as you would on a live site — it confirms
            on this page and does not send a real email yet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <Reveal>
            <div className="contact-card">
              <h2>Office</h2>
              <p>{COMPANY.address}</p>
              <p>{COMPANY.hours}</p>
              <h2>Sales & licences</h2>
              <p>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a>
                <br />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
              <h2>Support</h2>
              <p>
                <a href={`tel:${COMPANY.supportPhone.replace(/\s/g, '')}`}>{COMPANY.supportPhone}</a>
                <br />
                <a href={`mailto:${COMPANY.support}`}>{COMPANY.support}</a>
              </p>
              <p className="quiet">GSTIN {COMPANY.gstin}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            {sent ? (
              <div className="thanks">
                <h2>We have the note.</h2>
                <p>
                  Thank you, {name.trim()}. On the live site this would reach {COMPANY.email}. For
                  now it stays in this browser so you can see the flow.
                </p>
                <button type="button" className="btn" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <label>
                  Name
                  <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
                </label>
                <label>
                  Work email
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                  />
                </label>
                <label>
                  Firm
                  <input value={firm} onChange={(event) => setFirm(event.target.value)} placeholder="Optional" />
                </label>
                <label>
                  How can we help?
                  <textarea rows={5} value={message} onChange={(event) => setMessage(event.target.value)} />
                </label>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn primary">
                  Send message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
