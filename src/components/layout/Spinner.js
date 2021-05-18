import spinner from '../../img/spinner.gif'

const Spinner = ({ margin, width }) => (
  <>
    <img
      src={spinner}
      style={{ width, margin, display: 'block' }}
      alt='Loading...'
    />
  </>
)

Spinner.defaultProps = {
  margin: '10rem auto 0',
  width: '170px',
}

export default Spinner
