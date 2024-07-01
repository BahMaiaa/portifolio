import perfil from "../assets/logobm.png"
import Typewriter from "./Typewriter/Typewriter";



function Banner() {
  return (
    <div className="flex flex-col items-center justify-center" >
      <div>
        <div >
          <img src={perfil} alt="Barbara" className=" " />
        </div>
      </div>
      <div className="mt-4 md:mt-0">

        <Typewriter
          sentences={[
            'Olá, meu nome é Bárbara',
            'Eu sou desenvolvedora web',
            'Sou criativa',
            'Amo programar!',
            'E enfrento qualquer desafio',
          ]}
          typingSpeed={100} //default 100
          isInfinite={true} //default false
          separator="|" //default |
          color="#ffffff" //default #000000
        />

      </div>

    </div>

  );
}

export default Banner;