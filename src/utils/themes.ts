export const getUserTheme = () => {
  const localStorageValue = localStorage.getItem('jbbal-theme')
  const systemValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  return localStorageValue ?? systemValue
}

export const setTheme = (theme: string) => document.documentElement.setAttribute('data-theme', theme)