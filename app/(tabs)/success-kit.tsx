import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/ui/text';

export default function SuccessKitScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 32 }}
      contentContainerClassName="px-6 gap-6"
    >
      <View className="gap-1">
        <Text className="text-3xl font-bold text-foreground">Success kit</Text>
        <Text className="text-base text-muted-foreground">
          Your tools and resources for success.
        </Text>
      </View>
    </ScrollView>
  );
}
