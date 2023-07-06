import PropTypes from 'prop-types';

const Button = ({text, text_color, bg, onClick}) => {
  return (
    <button onClick={onClick} className="btn" style={{ backgroundColor: bg, color: text_color}}>{text}</button>
  )
}

Button.defaultProps = {
    text : '...Saving...',
    text_color: 'white',
    bg : 'black',
}

Button.propTypes = {
text: PropTypes.string,
text_color: PropTypes.string,
bg: PropTypes.string,
onClick: PropTypes.func,
}

export default Button