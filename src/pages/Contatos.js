import React, {useState, useRef} from 'react';
import '../styles/contatos.css';


export default function Contatos() {
  
  const buttonRef = useRef(null)

  const dados = {
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    documento: "",
  }

  const [values, setValues] = useState(dados);
  
  function onChange(e) {
    const {name, value} = e.target;

    values[name] = value;

    setValues({...values, [name]: value})
  }
  
  function onSubmit(e) {
    buttonRef.current.focus()
    e.preventDefault();
    console.log(values)

    clearFields(e)  
    setValues([])
  }

  function clearFields(event){
    Array.from(event.target).forEach( (e) => (e.value = ''))
 } 

  

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="mb-3 pt-0">
        <h3 className="text-white text-center text-4xl mb-4 font-black">Formulário de contato</h3>
      </div>
      <form
        className="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            onChange={onChange}
            placeholder="Nome"
            name="nome"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            onChange={onChange}
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="text"
            onChange={onChange}
            placeholder="telefone"
            name="telefone"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Escreva uma mensagem"
            onChange={onChange}
            name="mensagem"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <input
            type="file"
            onChange={onChange}
            name="documento"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        <div className="mb-3 pt-0">
          <button
            ref = {buttonRef}
            className="mt-5 text-white bg-purple hover:bg-purple-light font-bold uppercase text-sm w-full py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
