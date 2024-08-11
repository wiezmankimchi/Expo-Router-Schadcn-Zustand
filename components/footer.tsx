import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Footer() {
    const { bottom } = useSafeAreaInsets();
    return (
      <View
        className="flex shrink-0 bg-gray-50"
        style={{ paddingBottom: bottom }}
      >
        <View className="py-6 flex-1 items-start px-4 md:px-6 ">
          <Text className={"text-center text-gray-700"}>
            © {new Date().getFullYear()} Me
          </Text>
        </View>
      </View>
    );
  }