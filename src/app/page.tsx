import Image from 'next/image'

export default function Page() {
  return (
    <div className="h-screen bg-slate-900 w-screen flex">
      <div className="bg-slate--800 w-screen h-2/5 flex-col justify-center items-center text-white">
        <div className="bg-green-500 w-full h-full flex">
          <div className="bg--black w-1/2 h-full justify-center flex items-center">
          <h1>Full Stack Developer</h1>
          

          </div>
          
          {/* Blue area */}
          <div className="bg-blue--800 w-1/2 h-full relative">
            <Image
              src="/red_network_globe.gif"
              alt=""
              fill
              style={{
                objectFit: 'cover', // fill the blue div fully
                // border: '1px solid #fff',
              }}
            />
          </div>

        </div>

        <div className='bg-black w-screen h-10'>
            <div className='relative '>
                <div className='absolute bottom-0 -pt-8 left-1/2 bg-pink-400'>

               developing...  
                </div>
            </div>
            
           </div>
      </div>

    </div>
  )
}
