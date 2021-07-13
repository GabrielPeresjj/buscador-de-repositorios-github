import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function Repositorios() {
    const history = useHistory();
    const [repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        let repositoriosNome = localStorage.getItem('repositoriosNome');
        if (repositoriosNome !== null) {
            repositoriosNome = JSON.parse(repositoriosNome);
            setRepositorios(repositoriosNome);
            localStorage.clear();
        } else {
            history.push('/');
        }
    }, []);

    return (
        <S.Container>
            <S.Title>
                Repositórios
            </S.Title>
            <S.Lista>
                {repositorios.map(repositorio => {
                    return (
                        <S.ListaItem>
                            Repositório: {repositorio}
                        </S.ListaItem>
                    )
                })}
            </S.Lista>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

export default Repositorios;
