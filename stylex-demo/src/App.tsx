import * as stylex from "@stylexjs/stylex"
import { Text } from "./Text/Text"

const media768 = "@media (max-width: 768px)"
const media1200 = "@media (max-width: 1200px)"


const styles = stylex.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    color: {
      default: 'yellow',
      [media1200]: 'navy',
      [media768]: 'pink',
    },
  },
})

function App() {

  return (
    <div {...stylex.props(styles.container)}>
      <Text />
      <div {...stylex.props(styles.content)}>
        Segundo texto aqui !!!
      </div>
    </div>
  )
}

export default App
