import React, {useState, useEffect} from 'react'
import { Cabecalho } from '../components/Cabecalho'

export default function Home() {
  const [busca, setBusca] = useState('');
  const [odas, setOdas] = useState([]);

  useEffect(()=> {
    carregaODAS();
    document.title = 'Bocaweb front';
  }, [busca])

  const carregaODAS = async () => {
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => setOdas(odas))
  };

  const buscaODA = (evento) => {
    setBusca(evento.target.value)
    carregaODAS();
  };

  return (
    <div>
    <Cabecalho 
        busca = {busca}
        buscaODA = {buscaODA}
        lista = {odas}
    />
    </div>
  )
}