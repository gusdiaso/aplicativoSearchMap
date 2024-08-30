import * as style from "./StyleSearchBar.js"
import Icon from "react-native-vector-icons/Feather.js";
import { Keyboard, Alert } from 'react-native';
import { useContext } from "react";
import { MeuContexto } from '../../MeuContexto';

export default function SearchBar( props ) {

  const { historico, setHistorico } = useContext(MeuContexto);
  let arrayHist = historico

  return (
    <style.div>
      <style.input placeholder="Digite um lugar ..." value={props.input} onChangeText={(text) => props.setInput(text)}/>
      <style.search onPress={ async() => {
        Keyboard.dismiss();
        props.setVisible(true)
        const coordinate = await props.searchAddress(props.input);
        props.setVisible(false)
        if (coordinate == -1){
          Alert.alert("Algo deu errado na busca!", `Não foi possível encontrar o endereço ${props.input}.`);
        } else {
          props.setLongitude(coordinate.lng);
          props.setLatitude(coordinate.lat);
          setHistorico(prevHistorico => [{ pesquisado: props.input, coordenada: `${coordinate.lng}, ${coordinate.lat}` }, ...prevHistorico]);
        }
      }}>
        <Icon name='search' color="#fff" size={28} />     
      </style.search>
    </style.div>
  );
}
