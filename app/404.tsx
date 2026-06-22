import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function NotFound() {
  const iosMessage = "we may be closing on this version of Yapper It is soon going to be rebranded as Twitter version 2 on Android you might want to switch to Android before the shutdown.";
  const defaultMessage = "please don't fret, we are having a couple of issues right now. We will fix those issues in a moment.";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.message}>{Platform.OS === 'ios' ? iosMessage : defaultMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 22,
  },
});
