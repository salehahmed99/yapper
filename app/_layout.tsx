import React, { useState } from 'react';
import { Slot } from 'expo-router';
import { Modal } from 'react-native';
import Start from '../src/components/Start';

export default function RootLayout() {
  const [showStart, setShowStart] = useState(true);

  return (
    <>
      <Slot />
      <Modal visible={showStart} animationType="slide" presentationStyle="fullScreen">
        <Start onClose={() => setShowStart(false)} />
      </Modal>
    </>
  );
}
