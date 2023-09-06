import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
const Login = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.containerLogo}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={estilos.logo}
        />
        <Text style={estilos.titulo}>Login</Text>
      </View>
      <View>
        <TextInput
          style={estilos.input}
          placeholder={'Email'}
          keyboardType={'email-adress'}
        />
        <TextInput
          style={estilos.input}
          placeholder={'Senha'}
          secureTextEntry={true}
        />
      </View>
      <Button title="Entrar" />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  containerLogo: {
    alignItems: 'center',
  },

  logo: {
    height: 72,
    width: 72,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 400,
    textAlign: 'center',
    fontFamily: 'roboto',
    paddingBottom: 24,
  },
  input: {
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16,
  },
});

export default Login;
