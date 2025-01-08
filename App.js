import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleContinue = () => {
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      {/* Đường kẻ ngăn cách */}
      <View style={styles.separator} />
      <Text style={styles.t2}>Nhập số điện thoại</Text>
      <Text style={styles.t3}>Dùng sđt để đăng nhập hoặc đăng kí tài khoản tại OneHousing Pro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button
        title="Tiếp tục"
        onPress={handleContinue}
        disabled={phoneNumber.length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Nội dung lên trên
    padding: 16,
    paddingTop: 50, // Khoảng cách với mép trên
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8, // Tạo khoảng cách phía dưới dòng "Đăng nhập"
  },
  separator: {
    height: 1, // Độ dày của đường kẻ
    backgroundColor: '#ddd', // Màu của đường kẻ
    marginBottom: 16, // Khoảng cách với nội dung bên dưới
  },
  t2: {
    fontSize: 16,
    marginBottom: 8,
  },
  t3: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});
