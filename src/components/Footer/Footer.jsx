import * as S from "./footer_styled"
import React from 'react'
import logo from "../../assets/logo.png"
import playstore from "../../assets/google_play_store.png"
import applestore from "../../assets/app_store.png"

export default function Footer() {
return (
    <S.Rodape>
        <div class="since">
            <img src={logo} alt="logo da empresa" />
            <p>@McDonald's 2024</p>
        </div>
        <div class="store">
            <img src={playstore} alt="imagem play store android" />
            <img src={applestore} alt="imagem apple store ios" />
        </div>
    </S.Rodape>
    );
}