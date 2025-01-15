import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
const notificationList = document.getElementById("notification-list");

notifications.forEach(notification => {
    const item = document.createElement("div");
    item.className = "notification-item";

    item.innerHTML = `
        <div class="icon">${notification.icon}</div>
        <div class="text">
            <h4>${notification.title}</h4>
            <p>${notification.description}</p>
        </div>
        <div class="timestamp">${notification.timestamp}</div>
    `;

    notificationList.appendChild(item);
});
export default App;
