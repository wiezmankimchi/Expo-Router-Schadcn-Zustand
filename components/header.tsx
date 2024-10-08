import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function Header() {
    const { top } = useSafeAreaInsets();
    return (
      <View style={{ paddingTop: top }}>
        <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
          <Link className="font-bold flex-1 items-center justify-center" href="/">
            ACME
          </Link>
          <View className="flex flex-row gap-4 sm:gap-6">
            <Link
              className="text-md font-medium hover:underline web:underline-offset-4"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-md font-medium hover:underline web:underline-offset-4"
              href="/product"
            >
              Product
            </Link>
            <Link
              className="text-md font-medium hover:underline web:underline-offset-4"
              href="/components"
            >
              Components
            </Link>
          </View>
        </View>
      </View>
    );
  } 