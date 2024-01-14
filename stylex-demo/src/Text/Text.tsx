import * as stylex from '@stylexjs/stylex'

const styles = stylex.create( {
  text: {
    color: 'blue',
    background: 'pink'
  }
})


export function Text() {
  return(
    <div {...stylex.props(styles.text)}>
      Componente de texto 
    </div>
  )
}