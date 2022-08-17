import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="absolute top-2 right-2">
        <button className="bg-black p-2 rounded-md text-white text-xs dark:bg-white dark:text-black" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </>
  )
}
