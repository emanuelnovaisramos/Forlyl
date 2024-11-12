import './styles.scss'
import Image from 'next/image'

export const BeFirst = () =>{
    return(
        <section className="be-first">
            <div className="content-container">
                <Image src="/code.png" width={700} height={700} alt="Code"/>
                <div className='text'>
                    <h2>Seja o primeiro a conhecer!</h2>
                    <p>A plataforma está em fase final de desenvolvimento e você pode ser um dos primeiros a testar. Cadastre-se agora e receba o convite em primeira mão assim que ela for lançada.</p>
                </div>
            </div>
        </section>
    )
}