import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, variant = 'primary', ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2 rounded ${
      variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
    }`}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button
