import * as style from "./StyleHistoric.js";
import PlaceItem from "../../components/PlaceItem/PlaceItem.js";
import { useContext, useState, useEffect } from "react";
import { MeuContexto } from '../../MeuContexto';

export default function Historic() {
  const { historico } = useContext(MeuContexto);
  const [historicoState, setHistoricoState] = useState(historico);

  useEffect(() => {
    setHistoricoState(historico);
  }, [historico]);

  return (
    <style.scrollview>
      {historicoState && historicoState.length > 0 ? (
        historicoState.map((item, index) => (
          <PlaceItem key={index} title={item.pesquisado} cord={item.coordenada} />
        ))
      ) : (
        <PlaceItem title="Histórico vazio" cord="Nenhuma até o momento" />
      )}
    </style.scrollview>
  );
}
