import FontAwesome from 'react-fontawesome'

const Blurb = ({ icon, title, desc }) => (
  <div className='flex mb-4 mr-4'>
    <FontAwesome name={icon} size='3x' className='w-16 mb-4 mr-4 text-center' />
    <div className='w-full'>
      <h3 className='font-bold pb-2'>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
)

export default Blurb
