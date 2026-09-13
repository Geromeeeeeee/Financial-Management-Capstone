import { SymbolView } from "expo-symbols";
import { PropsWithChildren, useState } from "react";
import { Pressable } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemedView>
      <Pressable onPress={() => setIsOpen((value) => !value)}>
        <ThemedView type="backgroundElement">
          <SymbolView
            name={{
              ios: "chevron.right",
              android: "chevron_right",
              web: "chevron_right",
            }}
            size={14}
            weight="bold"
            style={{ transform: [{ rotate: isOpen ? "-90deg" : "90deg" }] }}
          />
        </ThemedView>

        <ThemedText type="small">{title}</ThemedText>
      </Pressable>
      {isOpen && (
        <Animated.View entering={FadeIn.duration(200)}>
          <ThemedView type="backgroundElement">{children}</ThemedView>
        </Animated.View>
      )}
    </ThemedView>
  );
}
