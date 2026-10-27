import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { detectPlatform } from '../lib/site'

const features = [
  {
    title: 'Day book first',
    copy: 'Sales, purchase, receipt, payment, journal, contra, credit note and debit note. A voucher has to balance before it is saved.',
  },
  {
    title: 'GST the Indian way',
    copy: 'Same state splits CGST and SGST. Other states raise IGST. HSN, GSTIN and summaries sit next to the books, not in a separate tool.',
  },
  {
    title: 'Stock that posts',
    copy: 'Weighted average cost flows into gross profit and the balance sheet. Opening stock is a ledger, not a side note.',
  },
  {
    title: 'On this computer',
    copy: 'No cloud ledger. Companies and vouchers live in one file on the laptop. Backup is a copy of that file. Restore replaces it.',
  },
]

const steps = [
  { n: '01', title: 'Download for this machine', copy: 'macOS or Windows. One installer. The books never leave the laptop unless you copy a backup.' },
  { n: '02', title: 'Activate once', copy: 'A licence key opens Ledger Portal on one computer. After that, the program works without the internet.' },
  { n: '03', title: 'Create the company', copy: 'Name, state, GSTIN, books-from date. The chart of accounts is created with the company.' },
  { n: '04', title: 'Post the day', copy: 'Enter vouchers as they happen. Trial, profit & loss and balance sheet close from the same books.' },
]

export function Home() {
  const platform = detectPlatform()
  const downloadLabel = platform === 'mac' ? 'Download for Mac' : platform === 'win' ? 'Download for Windows' : 'Get the software'

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Desktop accounting · India</p>
            <h1>
              The books stay on
              <em> this computer.</em>
            </h1>
            <p className="lede">
              Ledger Portal is built like a Tally desk, not a website. Day book, GST, stock and
              statements — posted in double entry, kept in a file on your laptop.
            </p>
            <div className="hero-actions">
              <Link to="/download" className="btn primary lg">
                {downloadLabel}
              </Link>
              <Link to="/product" className="btn ghost lg">
                See how it works
              </Link>
            </div>
            <ul className="hero-points">
              <li>Works after activation without the internet</li>
              <li>One licence, one computer</li>
              <li>Mac and Windows</li>
            </ul>
          </div>
          <div className="hero-stage" aria-hidden="true">
            <div className="desk">
              <div className="desk-bar">
                <span />
                <span />
                <span />
                <strong>Sharma Traders · Day book</strong>
              </div>
              <div className="desk-body">
                <aside>
                  {['Home', 'Day book', 'Sales', 'Purchase', 'Receipt', 'Payment', 'Ledgers', 'GST'].map((item, index) => (
                    <b key={item} className={index === 1 ? 'on' : ''}>
                      {item}
                    </b>
                  ))}
                </aside>
                <div className="desk-sheet">
                  <header>
                    <span>Today</span>
                    <span>All time</span>
                  </header>
                  {[
                    ['S-1042', 'Sales', 'Agarwal Mills', '₹48,720'],
                    ['P-881', 'Purchase', 'Kaveri Spices', '₹12,450'],
                    ['R-220', 'Receipt', 'HDFC Bank', '₹30,000'],
                    ['J-19', 'Journal', 'Round off', '₹2'],
                  ].map((row) => (
                    <div key={row[0]} className="desk-row">
                      <span>{row[0]}</span>
                      <span>{row[1]}</span>
                      <span>{row[2]}</span>
                      <strong>{row[3]}</strong>
                    </div>
                  ))}
                  <div className="desk-foot">
                    <span>Trial balanced</span>
                    <span>CGST / SGST posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stats">
          {[
            ['8', 'Voucher types that must balance'],
            ['2', 'Companies on one computer'],
            ['0', 'Cloud copies of your books'],
            ['1', 'Licence per laptop'],
          ].map(([value, label], index) => (
            <Reveal key={label} delay={index * 80}>
              <p>
                <strong>{value}</strong>
                {label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Why firms switch</p>
            <h2 className="display">A Tally-like desk, without putting the books on someone else’s server.</h2>
          </Reveal>
          <div className="cards">
            {features.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="card">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">From download to first voucher</p>
            <h2 className="display">Four steps. Then the day book is yours.</h2>
          </Reveal>
          <ol className="steps">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 60}>
                <li>
                  <span>{step.n}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap quote-grid">
          <Reveal>
            <blockquote>
              <p>“We needed the speed of a keyboard desk and the certainty that the file sits in this office. Ledger Portal is that combination.”</p>
              <cite>Ananya Rao · Partner, Rao & Shah, Bengaluru</cite>
            </blockquote>
          </Reveal>
          <Reveal delay={90}>
            <blockquote>
              <p>“GST splits the way we already think about it. The backup is a file I can put on a pen drive before I leave.”</p>
              <cite>Vikram Mehta · Proprietor, Mehta Traders, Ahmedabad</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <Reveal>
            <p className="eyebrow light">Ready when you are</p>
            <h2 className="display">Install it on the laptop that keeps the books.</h2>
            <p className="lede">Mac or Windows. Activate once. Work without waiting on a website.</p>
            <Link to="/download" className="btn brass lg">
              Choose your device
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
