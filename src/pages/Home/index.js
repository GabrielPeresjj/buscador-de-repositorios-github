import axios from 'axios'
import React, { useState } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory();

    const [usuario, setUsuario] = useState('');
    const [erro, setErro] = useState(false);

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
            .then(response => {
                const repositorios = response.data;
                const repositoriosNome = [];
                repositorios.map((repositorios) => {
                    return (
                        repositoriosNome.push(repositorios.name)

                    )
                });
                localStorage.setItem('repositoriosNome', JSON.stringify(repositoriosNome));
                setErro(false)
                history.push('/repositorios');
            })
            .catch(err => {
                setErro(true)
            })

    };


    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Content>
            { erro  ? <S.ErrorMessage>Ocorreu um erro, tente novamente</S.ErrorMessage> : ''}
        </S.HomeContainer>
    )
}

export default Home
