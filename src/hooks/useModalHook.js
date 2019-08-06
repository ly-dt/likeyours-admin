import { useState } from 'react';

export default function useModal() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const toggleModal = () => setModalVisibility(!isModalVisible);
  return { isModalVisible, toggleModal };
}
