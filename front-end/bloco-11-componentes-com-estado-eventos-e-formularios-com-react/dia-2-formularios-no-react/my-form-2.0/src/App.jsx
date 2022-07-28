import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className='headerConteiner'>
          <h1 className='headerText'>FORMULARIO</h1>
        </header>
        <main>
          <fieldset>
            <h2 className='formText'>Trybe Form</h2>
            <hr />
            <label>
              Nome: <br />
              <input id='inputName' className='formInput' type="text" maxLength={40} required />
            </label>
            <label>
              Email: <br />
              <input type="text" className='formInput' maxLength={50} required />
            </label>
            <label>
              CPF: <br />
              <input type="text" className='formInput' maxLength={11} required />
            </label>
            <label>
              Endereço: <br />
              <input type="text" className='formInput' maxLength={200} required />
            </label>
            <label>
              Cidade: <br />
              <input type="text" className='formInput' maxLength={28} required />
            </label>
            <label>
              Estado: <br />
              <select className='formInput' name="estado">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
            </label>

            <div className='radioConteiner'>
              <label>
                Casa
                <input type="radio" className='radioButtons' name='radioButton' required />
              </label>

              <label>
                Apartamento
                <input type="radio" className='radioButtons' name='radioButton' required />
              </label>
            </div>

          </fieldset>
        </main>
      </div>
    );
  }
}

export default App;
