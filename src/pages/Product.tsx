import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

const modules = [
  {
    title: 'Gateway of companies',
    copy: 'Two companies on one computer. Create a company with state, GSTIN, PAN, logo and signature. The chart of accounts is built with it — small chart or a numbered general ledger.',
  },
  {
    title: 'Masters',
    copy: 'Ledgers, customers, suppliers, stock items. Opening balances, GSTIN, bank details and HSN sit on the master, not in a spreadsheet beside the software.',
  },
  {
    title: 'Vouchers',
    copy: 'Eight types. Debit and credit have to match. Stock lines carry quantity, rate and GST. Charges and discounts post to their own ledgers.',
  },
  {
    title: 'Statements',
    copy: 'Day book, account ledger, trial balance, profit & loss, income & expense, balance sheet, outstanding and GST summary. Same books, different views.',
  },
  {
    title: 'Banking',
    copy: 'Cash and bank on one screen. Contra moves money between them. Receipts and payments keep the party and the account in the same entry.',
  },
  {
    title: 'Backup & restore',
    copy: 'Save a .ledger copy of the file. Restore replaces the books on this computer. You can also open a company from an Excel workbook.',
  },
]

export function Product() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Product</p>
          <h1>Double entry for the way Indian firms already work.</h1>
          <p className="lede">
            Ledger Portal is a desktop program. It is not a login to a website. The companies,
            ledgers and vouchers stay in one file on the machine you activate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap feature-list">
          {modules.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <article>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">GST & stock</p>
            <h2 className="display">CGST, SGST, IGST — decided by the state on the company.</h2>
            <p>
              Intra-state invoices split the tax. Inter-state invoices raise IGST. Stock uses
              weighted average cost, so gross profit and the balance sheet stay in step.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="ticks">
              <li>15-character GSTIN checks on company and party</li>
              <li>HSN and GST rate on every stock item</li>
              <li>Output and input tax ledgers created with the company</li>
              <li>GST summary for the period you are looking at</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap privacy">
          <Reveal>
            <p className="eyebrow">Where the data lives</p>
            <h2 className="display">On the laptop. Not in our building.</h2>
            <p>
              Activation uses a licence key bound to one computer. After that, opening the program
              does not need the internet. If you move machines, you release the licence here and
              activate it there. The books move only if you copy a backup.
            </p>
            <Link to="/download" className="btn primary">
              Download Ledger Portal
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
