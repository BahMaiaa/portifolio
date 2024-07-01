import banner from '../assets/perfil1.jpg'

function AboutMe() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-around my-20">
            <div className="max-w-[600px] px-4 md:px-0">
                    <p className="text-white font-normal text-[18px] text-justify">
                    👩‍💻 Desenvolvedora Júnior | Apaixonada por tecnologia e resolução de problemas!
                    🌟 Graduada em Sistemas para Internet
                    🚀 Familiarizada com desenvolvimento web (HTML, CSS, frameworks como Bootstrap) e entusiasta em explorar novas tecnologias como desenvolvimento mobile e cloud computing.
                    💼 Determinada a crescer profissionalmente, buscando desafios que ampliem meu conhecimento e habilidades. Comprometida com a colaboração em equipe e apaixonada por aprender e evoluir constantemente na área de tecnologia.                    </p>
                </div>
                <div className="flex justify-center items-center mb-6 md:mb-0">
                    <img className="w-[300px] h-[300px] rounded-full object-cover " src={banner} alt="Thiago" style={{
                        background: "linear-gradient(to right, #E70FAA, #00C0FD)",
                        padding: "4px", // Espessura da borda
                    }} />
                </div>
            </div>

        </>
    )
}

export default AboutMe