import banner from '../assets/logo-p.jpg'

function AboutMe() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-around my-20">
                <div className="flex justify-center items-center mb-6 md:mb-0">
                    <img className="w-[300px] h-[300px] rounded-full object-cover " src={banner} alt="Thiago" style={{
                        background: "linear-gradient(to right, #E70FAA, #00C0FD)",
                        padding: "4px", // Espessura da borda
                    }} />
                </div>
                <div className="max-w-[600px] px-4 md:px-0">
                    <p className="text-white font-normal text-[18px] text-justify">
                        "Sou um desenvolvedora com uma paixão inabalável por criar experiências digitais inovadoras e funcionais. Focado no desenvolvimento front-end, procuro continuamente aprimorar e inovar nas interfaces digitais. Com uma trajetória robusta em projetos desafiadores, estou capacitado para enfrentar qualquer obstáculo no desenvolvimento web. Graduado em Tecnologia em Análise e Desenvolvimento de Sistemas em 2014, também me especializei em cursos de front-end para oferecer soluções técnicas de alta qualidade."
                    </p>
                </div>
            </div>

        </>
    )
}

export default AboutMe