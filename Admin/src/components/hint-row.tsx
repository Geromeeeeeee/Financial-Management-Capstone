import type { ReactNode } from "react";
import { View } from "react-native";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
};

export function HintRow({
  title = "Try editing",
  hint = "app/index.tsx",
}: HintRowProps) {
  return (
    <View>
      <ThemedText type="small">{title}</ThemedText>
      <ThemedView type="backgroundSelected">
        <ThemedText themeColor="textSecondary">{hint}</ThemedText>
      </ThemedView>
    </View>
  );
}
