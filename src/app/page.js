import Marque from '@/components/Marque'
import HeroSection from '../components/HeroSection'
import AboutMe from '@/components/AboutMe'
import FeaturedWork from '@/components/FeaturedWork'
import WhatIBuild from '@/components/WhatIBuild'

export default function Home() {
    return (
        <main className='pt-25'>

            <div className='px-3 lg:pl-85 lg:pt-25 lg:pr-25'>
                <HeroSection />
            </div>
            <Marque />

            <div className='px-3'>
                <AboutMe />
            </div>

            <FeaturedWork />
            <WhatIBuild />

        </main>
    )
}