import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import './animacoes.css'
import './responsivo.css'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'

export default function Sobre() {
    const mapaRef = useRef(null!)
    const depoimentosRef = useRef(null!)
    const [mapaEvisivel, setMapaEVisivel] = useState<boolean>()
    const [depoimentosEvisivel, setdepoimentoEVisivel] = useState<boolean>()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMapaEVisivel(entry.isIntersecting)
            //setdepoimentoEVisivel(entry.isIntersecting)
        })
        const descricaoObserver = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setdepoimentoEVisivel(entry.isIntersecting)
        })
        observer.observe(mapaRef.current)
        descricaoObserver.observe(depoimentosRef.current)
    }, [])
    return (
        <section>
            <StyledQuemSomos>
                <div className="imagem entrarEsqueda">

                </div>
                <div className="texto entrarDireita">
                    <h2 className="titulo">Quem somos <span className="linha expadinLinha"></span></h2>
                    <p>
                        Fundado em 2001 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus facilis ea maiores. Quam, pariatur veniam illo doloribus dignissimos voluptatum suscipit hic ab, officiis minima molestiae nisi repellendus excepturi nulla?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam perspiciatis, repellat vel perferendis suscipit dolor quasi, maxime est repudiandae tempore temporibus quae aspernatur qui, ullam tempora blanditiis autem? Quaerat!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam perspiciatis, repellat vel perferendis suscipit dolor quasi, maxime est repudiandae tempore temporibus quae aspernatur qui, ullam tempora blanditiis autem? Quaerat!
                    </p>
                </div>
            </StyledQuemSomos>

            <SyledDepoimentos ref={depoimentosRef}>
                <h2 className="titulo">"Depoimentos"</h2>
                <div className={`comentairios ${depoimentosEvisivel ? 'animacaoOpacidade' : ''}`}>
                    <div className={`comentario`}>
                        <div className="imagem"
                            style={{ backgroundImage: "url('../../assets/pessoa2.jpg')" }}
                        ></div>
                        <h3>João</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione voluptates hic in, optio eaque quasi similique aliquid nemo earum. Corrupti officiis provident fugit molestiae nulla molestias, asperiores non atque.
                        </p>
                    </div>
                    <div className={`comentario `}>
                        <div className="imagem"
                            style={{ backgroundImage: "url('../../assets/pessoa3.jpg')" }}
                        ></div>
                        <h3>Chico</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione voluptates hic in, optio eaque quasi similique aliquid nemo earum. Corrupti officiis provident fugit molestiae nulla molestias, asperiores non atque.
                        </p>
                    </div>
                    <div className={`comentario`}>
                        <div className="imagem"
                            style={{ backgroundImage: "url('../../assets/pessoa1.jpg')" }}
                        ></div>
                        <h3>Maria</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione voluptates hic in, optio eaque quasi similique aliquid nemo earum. Corrupti officiis provident fugit molestiae nulla molestias, asperiores non atque.
                        </p>
                    </div>
                </div>
            </SyledDepoimentos>

            <StyledInfo>
                <div className="contato">
                    <h2 className="title">Entre em contato</h2>
                    <div className="texto">
                        <p className="telefone"><span><AiOutlinePhone /></span> (11) 3442-8922</p>
                        <p><span><BsWhatsapp /></span> (11) 99999-9999</p>
                        <p><span><BsInstagram /></span> depicesRes</p>
                    </div>
                </div>
                <div className="horarios">
                    <h2 className="title">Nossos Horarios</h2>
                    <p>
                        Seg-Sex das 12:00 as 00:00
                    </p>
                </div>
            </StyledInfo>

            <StyledMapa ref={mapaRef} className={`${mapaEvisivel ? 'expandir' : ''}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15163.673801720255!2d-47.92853678822022!3d-18.167670243938343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a666016b03da09%3A0x27ffd0e0bd92fe45!2sCatal%C3%A3o%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1676049371247!5m2!1spt-BR!2sbr" width="100%" height='100%'></iframe>
            </StyledMapa>

        </section>
    )
}


const StyledQuemSomos = styled.section`

    width: 70vw;
    margin: 4rem auto 23vh;
    display: flex;

    .linha{
        display: block;
        border-bottom: 2px solid var(--cor3);
    }

    .imagem{
        background-image: url('../../assets/pexels-sebastian-coman-photography-3437689.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        box-shadow: 3px 3px 5px rgb(0 0 0 / 10%);
        height: 60vh;
        width: 100%;
        border-radius: 10px;
        margin-right: 2rem;
        position: relative;
        float: right;
    }

    .texto{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-self: center;
        text-align: justify;
        position: relative;
        align-self: flex-end;
        
        .titulo{
            color: var(--cor3);
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 90vw;

}

`

const StyledMapa = styled.section`

    height: 80vh;
    margin: 0 auto;
    background-color: var(--cor1);

`

const SyledDepoimentos = styled.section`

    min-height: 100vh;
    text-align: center;
    background-color: var(--cor1);
    padding: 2rem;
    margin-bottom: 20vh;
    box-shadow: 0px 0px 8px 5px rgba(0,0,0,0.3);
    

    .titulo{
        font-family: 'Great Vibes', cursive;
        color: var(--cor3);
        font-weight: normal;
        font-size: 4rem;
    }

    .comentairios{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 2rem;
        height: 70%;

        .comentario{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .imagem{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-size: cover;
                background-position: center top;
                background-repeat: no-repeat;
            }
            h3{
                color: var(--cor3);
            }
            p{
                color: var(--cor0);
            }
        }
    }

    @media screen and (max-width: 600px) {
        .titulo{
            font-size: 3rem;
        }
        .comentairios{
            flex-direction: column;
            align-items: center;
        }
    }

`

const StyledInfo = styled.section`

    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 20vh auto;
    text-align: center;

    .contato{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;

        .telefone{
                font-weight: bold;
                font-size: 1.5rem;
        }

        p{
            display: flex;
            align-items: center;
            span{
                margin-right: 10px;
                color: var(--cor3);
                font-size: 2rem;
            }
        }
    }

    .horarios{
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../assets/pexels-elina-sazonova-1850627.jpg');
        color: var(--cor3);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
        height: 60vh;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }

`