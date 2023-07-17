import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
