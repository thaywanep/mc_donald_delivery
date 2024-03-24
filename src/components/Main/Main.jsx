import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/mequinosofa.png"
import loja from "../../assets/Restaurantes_Participantes.png"
import medidas from "../../assets/estamosjuntos.png"
import bigmac from "../../assets/bigmac.png"
import mac from '../../assets/bigmac (1).png'
import batata from '../../assets/batata.png'
import sorvete from '../../assets/sorvete.png'


export default function Main() {

return (
    <main>
        <S.Banner>
            <S.Principal>
                <img src={bigmac} alt="imagem hamburguer" />
                <h2>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h2>
            </S.Principal>
            <figure>
                <img onClick={()=>{setItem(mac)}} src={mac} alt="imagem hamburguer" />
                <img onClick={batataFrita} src={batata} alt="imagem de uma porção de batata frita" />
                <img onClick={casquinha} src={sorvete} alt="imagem de um sorvete em casquinha" />
            </figure>
        </S.Banner>
        <S.Promocao>
            <h3>Promoção</h3>
            <S.Center>
            <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
            <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
            <Card imagem={medidas} texto={"Confira as medidas que o Méqui adotou!"} />
            </S.Center>
        </S.Promocao>
    </main>
)
}