import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from './components/Button'
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.window}>
      <Icon onPress={() => {}} style={styles.icon} name="cafe" size={70} color="white" />
        <Text style={styles.title}>BUEN CAFE</Text>
        <Text style={styles.subtitle}>Inicie secion en su cuenta</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.textinput}
            placeholder='your@email.com'
            placeholderTextColor={'gray'}
          />
          <TextInput
            style={styles.textinput}
            placeholder='password'
            placeholderTextColor={'gray'}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.fogot}>
            <Text style={styles.textFogot}>Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
        <Button text = 'LOGIN'/>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa8072',
    alignItems: 'center',
    justifyContent: 'center',

  },
  window: {
    backgroundColor: '#ff7f50',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '80%',
    borderBottomColor: 'white',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 15,
  },
  inputs: {
    width: '100%',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor:'#585858',
    textShadowOffset:{width: 2, height: 3},
    textShadowRadius:15,
  },
  subtitle: {
    fontSize: 13,
    color: 'white',
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    width: '80%',
    marginTop: 20,
    borderRadius: 30,
    paddingStart: 20,
    color: 'white',
    fontSize: 17,
  },
  fogot: {
    alignSelf: 'flex-end',
    paddingEnd: 40,
    marginTop: 10,
  },
  textFogot: {
    fontSize: 14,
    color: 'white',
  },
  icon: {
    textShadowColor:'#585858',
    textShadowOffset:{width: 2, height: 3},
    textShadowRadius: 15,
  },
});
