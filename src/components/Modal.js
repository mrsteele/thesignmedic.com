import FontAwesome from 'react-fontawesome'

const Modal = ({ showing, children, close }) => !showing ? null : (
  <div className='fixed top-0 left-0 w-full h-full z-50'>
    <div className='bg-black opacity-50 w-full h-full' onClick={close} />
    <div className='bg-white p-12 rounded absolute' style={{
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <a className='absolute top-0 right-0 mr-2 text-2xl opacity-50 hover:opacity-75 cursor-pointer' onClick={close}>
        <FontAwesome name='times' />
      </a>
      <div className='text-black'>
        {children}
      </div>
    </div>
  </div>
)

export default Modal
