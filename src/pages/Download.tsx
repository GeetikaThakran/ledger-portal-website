import { useMemo, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { RELEASE, detectPlatform, downloadHref, type Platform } from '../lib/site'

const faq = [
  {
    q: 'Do I need the internet after activation?',
    a: 'No. The key is activated once on that computer. Companies and vouchers stay in a local file. The program opens without the internet.',
  },
  {
    q: 'Can I use the same key on two laptops?',
    a: 'One key opens one computer. Release it on the first machine, then activate it on the second. Copy a .ledger backup if you want the books there too.',
  },
  {
    q: 'Which Windows file should I take?',
    a: 'Use the 64-bit zip on a normal Windows laptop. Extract the whole folder. Open Ledger Portal software.exe from inside that folder — do not copy only the .exe to the Desktop.',
  },
  {
    q: 'What if Windows says ffmpeg.dll is missing?',
    a: 'The program was opened without its neighbouring files. Extract the zip fully, then start the .exe from that folder. A Desktop shortcut is fine; a copied .exe is not.',
  },
]

async function fileReady(file: string) {
  try {
    const response = await fetch(downloadHref(file), { method: 'HEAD' })
    const type = response.headers.get('Content-Type') || ''
    return response.ok && !type.includes('text/html')
  } catch {
    return false
  }
}

export function Download() {
  const detected = useMemo(() => detectPlatform(), [])
  const [picked, setPicked] = useState<Platform>(detected === 'other' ? 'win' : detected)
  const [note, setNote] = useState('')
  const [busy, setBusy] = useState(false)
  const pack = picked === 'mac' ? RELEASE.mac : RELEASE.win

  async function download() {
    setNote('')
    setBusy(true)
    const ready = await fileReady(pack.file)
    setBusy(false)
    if (!ready) {
      setNote(
        `The ${pack.label} installer is not on this site yet. Write to hello@ledgerportal.in and we will send ${pack.file}, or use Contact. Once the file sits in public/downloads, this button will start the download.`,
      )
      return
    }
    const link = document.createElement('a')
    link.href = downloadHref(pack.file)
    link.download = pack.file
    link.click()
    setNote(`Downloading ${pack.file}. Keep the folder together after you extract it.`)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Download</p>
          <h1>Install Ledger Portal on the computer that will hold the books.</h1>
          <p className="lede">
            Version {RELEASE.version} · {RELEASE.date}. We detected{' '}
            {detected === 'mac' ? 'a Mac' : detected === 'win' ? 'Windows' : 'your browser'}. You can
            still pick the other installer.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="os-toggle" role="tablist" aria-label="Choose an operating system">
            <button type="button" className={picked === 'mac' ? 'on' : ''} onClick={() => setPicked('mac')}>
              macOS
            </button>
            <button type="button" className={picked === 'win' ? 'on' : ''} onClick={() => setPicked('win')}>
              Windows
            </button>
          </div>
          <Reveal>
            <article className="download-card">
              <div>
                <p className="eyebrow">{pack.label}</p>
                <h2>Ledger Portal {RELEASE.version}</h2>
                <p>{pack.detail}</p>
                <p className="quiet">{pack.size} · {pack.file}</p>
              </div>
              <button type="button" className="btn primary lg" disabled={busy} onClick={() => void download()}>
                {busy ? 'Checking…' : `Download for ${pack.label}`}
              </button>
              {note && <p className="form-note">{note}</p>}
            </article>
          </Reveal>

          <div className="guide">
            <Reveal>
              <article>
                <h3>On a Mac</h3>
                <ol>
                  <li>Open the DMG and drag Ledger Portal into Applications.</li>
                  <li>On first open, use System Settings → Privacy if macOS asks to allow it.</li>
                  <li>Enter the licence key. After that, the program opens offline.</li>
                </ol>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article>
                <h3>On Windows</h3>
                <ol>
                  <li>Extract the zip into a folder you will keep, such as Documents.</li>
                  <li>Open Ledger Portal software.exe from inside that folder.</li>
                  <li>If Windows warns, choose More info, then Run anyway.</li>
                  <li>To put it on the Desktop, send a shortcut — not the .exe alone.</li>
                </ol>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section alt" id="licence">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Licence</p>
            <h2 className="display">One key. One computer. The books stay put.</h2>
            <p>
              We issue a key such as LP-ABCD-EFGH-JKLM. You enter it on the laptop. If the computer
              is offline, you send us the request code and we send an activation code back. The key
              cannot sit on two machines at once.
            </p>
          </Reveal>
          <Reveal delay={70}>
            <ul className="ticks">
              <li>Activation is per machine, not per company</li>
              <li>Two companies can live on the same licensed computer</li>
              <li>Release the computer before moving the key</li>
              <li>A .ledger backup is how the books travel</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq">
          <h2>Before you install</h2>
          {faq.map((item) => (
            <Reveal key={item.q}>
              <details>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
