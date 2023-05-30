import { useState, useMemo, FormEvent } from 'react'
import './App.css'

interface ResultadoProps{
  nome: string;
  idade: number;
}

function App() {
  const [nome,setNome] = useState("");
  const [ano, setAno] = useState("");
  const [resultado, setResultado] = useState<ResultadoProps>()

  function descobrirIdade(e:FormEvent){
    e.preventDefault();
    const anoAtual = new Date().getUTCFullYear();
    setResultado({
      nome: nome,
      idade : anoAtual - Number(ano) 
    })

    setNome("");
    setAno("");
  }

  return (
    <div className='container'>
      <h1>Descubra sua idade</h1>
      <form className='form' onSubmit={descobrirIdade}>
        <label className='label'>Informe seu nome!</label>
        <input 
          className='input'
          placeholder='Informe deu nome' 
          value={nome}
          onChange={(e)=>setNome(e.target.value)}/>

        <label className='label'>Informe o anos que nasceu!</label>
        <input 
          className='input' 
          placeholder='Informe sua idade'
          value={ano}
          onChange={(e)=>setAno(e.target.value)}/>

        <button type='submit' onClick={descobrirIdade} >Descobrir a idade</button>
      </form>

      {resultado && resultado.nome !=='' &&(
        <section className='result'>
          <h2>{resultado?.nome}, você tem: <span>{resultado?.idade} anos</span></h2>
        </section>
      )}

    </div>  
  )
}

export default App
