import "./index.css";
import Canvas from './Canvas'
import data from './data'

function App ()  {
  return (
    <>
      <div className='w-full relative min-h-screen'>
        {data[0].map((canvasdets,index)=>(
          <Canvas key={index} details={canvasdets}/>
        ))}
      </div>
    </>
  )
}

export default App