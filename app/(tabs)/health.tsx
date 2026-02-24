import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/ui/text';

export default function HealthScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 32 }}
      contentContainerClassName="px-6 gap-6"
    >
      <View className="gap-1">
        <Text className="text-3xl font-bold text-foreground">Health</Text>
        <Text className="text-base text-muted-foreground">
          Track your health metrics and progress.
        </Text>
      </View>
    </ScrollView>
  );
}
