import { useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        maritalStatus: "",
        genre: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData((prev) => {
            const newData = { ...prev, [name] : value };
            return newData;
        });
    };

    const calculateProgress = () => {

      let value = 0;
      let amountToAdd = 25;

      if(data.fullName){
        const explodeString = data.fullName.split(" ")
        if(explodeString[1]){
          value = value + amountToAdd;
        }
      }
      if(data.email){
        let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(pattern.test(data.email)){
          value = value + amountToAdd;

        }
      }
      if(data.maritalStatus){
        value = value + amountToAdd;
      }
      if(data.genre){
        value = value + amountToAdd;
      }
      
      return value;
    }
    calculateProgress()

    const handleClick = () => {
      alert("formulario enviado com sucesso!")
      setData( {fullName: "",
        email: "",
        maritalStatus: "",
        genre: "",
      })
    }
    return (
        <div>
            <h1>Progresso do Formulario</h1>

            <main>
                <div className="bar-container">
                    <div className="bar"style={{width : `${calculateProgress()}%`}} ></div>
                </div>

                <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        id="nome"
                        name="fullName"
                        value={data.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">E-mail</label>
                    <input type="E-mail" name="email" value={data.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Estado Civil</label>
                    <select name="maritalStatus" value={data.maritalStatus} onChange={handleChange}>
                        <option value="">-Selecione...</option>
                        <option value="solteiro">Solteiro</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">Divorciado</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Genero</label>
                    <div className="radios-container">
                        <span>
                            <input
                                type="radio"
                                name="genre"
                                value={"masculino"}
                                onChange={handleChange}
                                checked={data.genre === "masculino"}
                            />
                            Masculino
                        </span>
                        <span>
                            <input
                                type="radio"
                                name="genre"
                                value={"feminino"}
                                checked={data.genre === "feminino"}
                                onChange={handleChange}
                            />
                            Feminino
                        </span>
                    </div>
                </div>

                <button onClick={handleClick} disabled = {calculateProgress() !== 100} >Enviar Formulario</button>
            </main>
        </div>
    );
}

export default App;
