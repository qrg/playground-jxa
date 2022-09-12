import '@jxa/global-type'
import { run } from '@jxa/run'
export const currentUserName = (): Promise<string | undefined> => {
  return run(() => {
    const sys = Application('System Events')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return sys.currentUser().name()
  })
}

export const example = async () => {
  const userName = await currentUserName()
  if (!userName) {
    throw new Error(userName)
  }
  return `User: ${userName}`
}

example()
  .then((v) => console.log(v))
  .catch((err) => console.error(err))
