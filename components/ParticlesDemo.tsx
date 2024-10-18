
  
import Image from 'next/image'
import Particles from './Particles'
import { TypewriterEffectSmoothDemo } from './TypewritterEffect'
  
  
  export function Particlesdemo() {
    return (
      <>
        <main className="relative flex flex-col justify-center  -mb-72">
          <div className="w-full max-w-screen-4xl mx-auto px-4 md:px-6 py-24">
  
            <div className="text-center">
  
              {/* Particles animation */}
              <Particles className="absolute inset-0 pointer-events-none" />
  
              <div className="relative"> 
                <TypewriterEffectSmoothDemo/>
                
              </div>
            </div>
  
          </div>
        </main>
  
       
      </>
    )
  }