// HospitalScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

// Sample data for appointments
const appointments = [
  { id: '1', date: '2024-09-01', time: '10:00 AM', doctor: 'Dr. Smith' },
  { id: '2', date: '2024-09-03', time: '11:30 AM', doctor: 'Dr. Johnson' },
  { id: '3', date: '2024-09-07', time: '02:00 PM', doctor: 'Dr. Lee' },
];

const HospitalScreen = () => {
  // Render each appointment item
  const renderItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.appointmentText}>{item.date}</Text>
      <Text style={styles.appointmentText}>{item.time}</Text>
      <Text style={styles.appointmentText}>{item.doctor}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Dashboard</Text>
      <Text style={styles.greeting}>Welcome, John Doe</Text>
      <Text style={styles.subHeader}>Upcoming Appointments</Text>
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Schedule New Appointment"
        onPress={() => console.log('Navigate to schedule appointment')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  appointmentItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  appointmentText: {
    fontSize: 16,
  },
});

export default HospitalScreen;
