import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { COMPANY } from '../lib/site'

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Company</p>
          <h1>We make accounting software that behaves like a desk, not like a website.</h1>
          <p className="lede">
            {COMPANY.legal} is based in New Delhi. We build Ledger Portal for proprietors, CA firms
            and trading houses that want GST and double entry on the machine in front of them.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap story">
          <Reveal>
            <h2 className="display">The work</h2>
            <p>
              Most “modern” accounting products keep the books on a server. That is convenient until
              the line drops, the subscription lapses, or a client asks where the file actually is.
              We took the other path: a desktop program, a local file, a licence on one computer.
            </p>
            <p>
              The product follows a Tally-like flow because that is how Indian accountants already
              think — gateway, day book, masters, statements. GST is not a plugin. Stock is not an
              afterthought. Backup is a file you can hold.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="facts">
              <div>
                <dt>Founded</dt>
                <dd>2024, New Delhi</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Desktop books for India</dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd>{COMPANY.address}</dd>
              </div>
              <div>
                <dt>Legal</dt>
                <dd>
                  {COMPANY.legal}
                  <br />
                  CIN {COMPANY.cin}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap values">
          {[
            ['Local by default', 'The sqlite books file lives in the user folder of that laptop. We do not host your companies.'],
            ['Keyboard first', 'The desk is meant to be driven without hunting for a mouse. Vouchers refuse to save out of balance.'],
            ['Honest licensing', 'A key is one computer. Moving it is a release and an activate, not a hidden extra seat.'],
          ].map((item, index) => (
            <Reveal key={item[0]} delay={index * 70}>
              <article>
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <Reveal>
            <h2 className="display">Want it on a machine this week?</h2>
            <p className="lede">Download the build for that laptop, or write to us for a licence key.</p>
            <div className="hero-actions">
              <Link to="/download" className="btn brass lg">
                Download
              </Link>
              <Link to="/contact" className="btn ghost lg">
                Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
