import ScrollVelocity from "@/providers/ScrollVelocity"



const Marque = () => {
    const Star = () => {
        return (
            <span className="accent">✱</span>
        )
    }

    return (
        <div className="w-full py-8">

            <ScrollVelocity
                texts={[
                    <span key={1}>
                        UI/UX DESIGN <Star /> WEB DEVELOPMENT <Star /> SEO <Star /> FULL STACK <Star /> MODERN WEB APPS <Star /> PERFORMANCE <Star />
                    </span>
                ]}
                velocity={150}
                className="custom-scroll-text"
                numCopies={2}
                damping={100}
                stiffness={200}
            />
        </div>
    )
}

export default Marque