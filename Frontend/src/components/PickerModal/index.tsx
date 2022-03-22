import {Modal, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

type Props = {
  visible: boolean;
  items: string[];
  title: string;
  onClose: () => void;
  onSelect: (value: string) => void;
  value?: string;
  state2: string;
};
const PickerModalComponent: React.FC<Props> = ({
  visible,
  items,
  title,
  onClose,
  onSelect,
  value,
  state2,
}) => {
  const [state, setState] = useState<string>(state2);

  useEffect(() => {
    if (value) {
      setState(value);
    }
  }, [value]);
  return (
    <Modal animated transparent visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <View style={styles.header}>
            <Entypo name="cross" size={30} color="black" onPress={onClose} />
            <Text style={styles.label}>Select a {title || 'Placeholder'}</Text>
            <Entypo
              name="check"
              size={30}
              color="black"
              onPress={() => onSelect(state)}
            />
          </View>
          <Picker selectedValue={state} onValueChange={setState}>
            {items.map(item => (
              <Picker.Item value={item} label={item} key={item} />
            ))}
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

export default PickerModalComponent;
