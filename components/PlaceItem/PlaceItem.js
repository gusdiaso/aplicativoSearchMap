import * as style from "./StylePlaceItem.js"
import Icon from "react-native-vector-icons/Feather.js";

export default function PlaceItem(props) {
  return (
    <style.view>
      <style.title>{props.title}</style.title>
      <style.cord>Coordenada: {props.cord}</style.cord>
    </style.view>
  );
}
