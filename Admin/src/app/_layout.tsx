import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  GoogleSansFlex_400Regular,
  GoogleSansFlex_500Medium,
  GoogleSansFlex_600SemiBold,
  GoogleSansFlex_700Bold,
} from "@expo-google-fonts/google-sans-flex";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    GoogleSansFlex_400Regular,
    GoogleSansFlex_500Medium,
    GoogleSansFlex_600SemiBold,
    GoogleSansFlex_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <AnimatedSplashOverlay />
      <AppTabs />
    </>
  );
}
