import Marque from '@/components/Marque'
import HeroSection from '../components/HeroSection'
import AboutMe from '@/components/AboutMe'

export default function Home() {
    return (
        <main className='pt-25 h-[2000px]'>
            
                <div className='px-3'>
                    <HeroSection />
                </div>
                <Marque />

                <div className='px-3'>
                    <AboutMe />
                </div>
            
        </main>
    )
}