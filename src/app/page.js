import Marque from '@/components/Marque'
import HeroSection from '../components/HeroSection'
import AboutMe from '@/components/AboutMe'
import FeaturedWork from '@/components/FeaturedWork'

export default function Home() {
    return (
        <main className='pt-25'>

            <div className='px-3'>
                <HeroSection />
            </div>
            <Marque />

            <div className='px-3'>
                <AboutMe />
            </div>

            <FeaturedWork />
        </main>
    )
}