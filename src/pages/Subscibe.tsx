import { Logo } from "../components/Logo";

export function Subscribe() {
    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat bg-center flex flex-col items-center">
            <div className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[~640px]">
                    <Logo />
                    <h1 className="text-[2.4rem] mt-8 ">
                        Construa uma aplicação completa, do zero, com React JS
                    </h1>
                    <p>
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div></div>
            </div>
            <img
                className="mt-10"
                src="/src/assets/code.png"
                alt="Code mockup"
            />
        </div>
    );
}