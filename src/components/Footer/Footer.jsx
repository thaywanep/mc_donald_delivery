import * as S from "./footer_styled"

import React from 'react'

export default function Footer() {
return (
    <footer className="footer">
        <div className="footer-content">
            <p>Texto do rodapé</p>
            <img src="caminho/para/imagem.png" alt="Descrição da Imagem do Rodapé" />
        </div>
    </footer>
    );
}