import { Geral } from "../components/Geral.style";
import { Div } from "../components/Div.style";
import { Calculator } from "../components/Calculator.style";
import { Aside } from "../components/Aside.style";
import api from "../services/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../src/validators/validators"

function Calc(){
  const [resultado, setresultado] = useState([])

  const {handleSubmit, register} = useForm({
    resolver: yupResolver(schema),
  })

  async function handleResult(data){
    await api
      .post("/", data)
      .then((response) => {
        setresultado(response.data)
      })
      .catch((err) => console.log(err))
  }

    return (
      <Geral>
        <Div>
          <Calculator onChange={handleSubmit(handleResult)}>
            <h1>Simule sua Antecipação</h1>
            <div>
            <h3>Informe o valor da venda *</h3>
            <input
              required
              type="text"
              min={1000}
              id="amount"
              placeholder="R$ 0,00"
              {...register("amount")}
            />
  
            <h3>Em quantas parcelas *</h3>
            <input 
              type="text"
              max={12}
              id="installments"
              {...register("installments")}
            />
            <p> Máximo de 12 parcelas.</p>
  
            <h3>Informe o percentual de MDR*</h3>
            <input 
              type="text" 
              id="mdr"
              {...register("mdr")}
            />
            </div>
          </Calculator>
          <Aside>
            <div>
            <h1>VOCÊ RECEBERÁ:</h1>
            <p>
              Amanhã:
              <span>
                <strong> R${resultado[1]} </strong>
              </span>
            </p>
            <p>
              Em 15 dias:
              <span>
                <strong> R${resultado[15]} </strong>
              </span>
            </p>
            <p>
              Em 30 dias:
              <span>
                <strong> R${resultado[30]} </strong>
              </span>
            </p>
            <p>
              Em 90 dias:
              <span>
                <strong> R${resultado[90]} </strong>
              </span>
            </p>
            </div>
          </Aside>
        </Div>
      </Geral>
    );
  };
  
export default Calc;