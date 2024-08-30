import React, {useState} from 'react';
import * as Style from "./style"
import LottieView from "lottie-react-native";

export default function Loader({visible}) {
  return (
    <Style.Modal transparent visible={visible}>
      <Style.ViewContainer>
          <LottieView
            source={require("../../assets/animation.json")}
            style={{width: "60%", height: "60%"}}
            autoPlay
            loop
          />
      </Style.ViewContainer>
    </Style.Modal>
  );
}
