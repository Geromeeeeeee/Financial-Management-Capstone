import { Image } from "expo-image";
import { version } from "expo/package.json";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export function WebBadge() {
  return (
    <ThemedView>
      <ThemedText type="code" themeColor="textSecondary">
        v{version}
      </ThemedText>
      <Image source={require("@/assets/images/expo-badge.png")} />
    </ThemedView>
  );
}
