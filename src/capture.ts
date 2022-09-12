import '@jxa/global-type'
import { run } from '@jxa/run'

export const capture = () => {
  return run(() => {
    const chrome = Application('Google Chrome')
    const se = Application('System Events')

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const window = chrome.windows[0]
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const tab = new chrome.Tab()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    window.tabs.push(tab) - 1
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    tab.url = 'https://www.google.com'

    delay(0.2)
    se.keystroke('i', { using: ['command down', 'option down'] })
    delay(0.2)
    se.keystroke('p', { using: ['command down', 'shift down'] })
    delay(0.2)
    se.keystroke('Full')
    delay(0.2)
    se.keyCode(36)
  })
}

export const main = async () => {
  await capture()
}

capture()
  .then(() => console.log('done'))
  .catch((err) => console.error(err))
