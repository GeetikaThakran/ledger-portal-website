import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { COMPANY } from '../lib/site'

const links = [
  { to: '/product', label: 'Product' },
  { to: '/download', label: 'Download' },
  { to: '/about', label: 'Company' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
    const titles: Record<string, string> = {
      '/': 'Ledger Portal — Books that stay on this computer',
      '/product': 'Product · Ledger Portal',
      '/download': 'Download · Ledger Portal',
      '/about': 'Company · Ledger Portal',
      '/contact': 'Contact · Ledger Portal',
    }
    document.title = titles[pathname] ?? 'Ledger Portal'
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site">
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <Link to="/" className="brand" aria-label="Ledger Portal home">
          <img src="/logo.png" alt="" />
          <span>Ledger Portal</span>
        </Link>
        <nav className={open ? 'is-open' : ''} aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/download" className="btn primary nav-cta" onClick={() => setOpen(false)}>
            Get the software
          </Link>
        </nav>
        <button
          type="button"
          className="menu"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <p className="brand foot-brand">
              <img src="/logo.png" alt="" />
              Ledger Portal
            </p>
            <p className="lede">{COMPANY.tagline}</p>
            <p className="quiet">
              Desktop accounting for Indian firms. Companies, vouchers and stock stay on the laptop
              you activate.
            </p>
          </div>
          <div>
            <h2>Product</h2>
            <Link to="/product">Day book & GST</Link>
            <Link to="/download">Mac & Windows</Link>
            <Link to="/download#licence">Licence</Link>
          </div>
          <div>
            <h2>Company</h2>
            <Link to="/about">About us</Link>
            <Link to="/contact">Talk to us</Link>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </div>
          <div>
            <h2>Visit</h2>
            <p>{COMPANY.address}</p>
            <p>{COMPANY.phone}</p>
            <p>{COMPANY.hours}</p>
          </div>
        </div>
        <div className="wrap footer-base">
          <span>
            © {new Date().getFullYear()} {COMPANY.legal}. Dummy contact details for this preview.
          </span>
          <span>CIN {COMPANY.cin} · GSTIN {COMPANY.gstin}</span>
        </div>
      </footer>
    </div>
  )
}
