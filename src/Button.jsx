// Importamos el paquete prop-types
import PropTypes from 'prop-types'

export function Button({text, name}) {
  console.log(text)
  return <button onClick={(e) => {
    console.log("Click!")
    console.log(e)
  }}>{text} - {name}</button>;
}

// .propTypes
Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string
}

// .defaultProps
Button.defaultProps = {
  name: "Username"
}