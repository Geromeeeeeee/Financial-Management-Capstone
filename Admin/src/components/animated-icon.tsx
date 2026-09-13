import { Image } from "expo-image";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { View } from "react-native";

export function AnimatedSplashOverlay() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const image = <Image source={require("@/assets/images/expo-logo.png")} />;

  return animate ? (
    <View>{image}</View>
  ) : (
    <View
      onLayout={() => {
        SplashScreen.hideAsync().finally(() => {
          setAnimate(true);
        });
      }}
    >
      {image}
    </View>
  );
}

export function AnimatedIcon() {
  return (
    <View>
      <Image source={require("@/assets/images/logo-glow.png")} />
      <Image source={require("@/assets/images/expo-logo.png")} />
    </View>
  );
}
