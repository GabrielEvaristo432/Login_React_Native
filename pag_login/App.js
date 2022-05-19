import { Text, View, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View 
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '300px',
          height: '40px',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 6
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '15px'
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '300px',
          height: '40px',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 6
        }}
        onPress={() => navigation.navigate('Criar conta')}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '15px'
          }}
        >
          Criar conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Login({ navigation }) {
  return (
    <View 
      style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
      <label
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          fontFamily: 'monospace',
          margin: 4
        }}
      >
        E-mail
      </label>
      <input
        placeholder='Ex.: meuemail@email.com'
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          fontSize: '15px',
          margin: 4
        }}
      />

      <label
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          fontFamily: 'monospace',
          margin: 4
        }}
      >
        Senha
      </label>
      <input
        placeholder='Digite sua senha'
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          fontSize: '15px',
          margin: 4
        }}
      />
  
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '300px',
          height: '40px',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10
        }}
      onPress={() => navigation.navigate('Criar conta')}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '15px'
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function CriarConta({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <label
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          fontFamily: 'monospace',
          margin: 4
        }}
      >
        E-mail
      </label>
      <input
        placeholder='Digite seu melhor e-mail'
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          fontSize: '15px',
          margin: 4
        }}
      />

      <label
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          fontFamily: 'monospace',
          margin: 4
        }}
      >
        Crie uma senha
      </label>
      <input
        placeholder='Digite aqui'
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          fontSize: '15px',
          margin: 4
        }}
      />

      <label
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          fontFamily: 'monospace',
          margin: 4
        }}
      >
        Repita a senha
      </label>
      <input
        placeholder='Digite aqui'
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          fontSize: '15px',
          margin: 4
        }}
      />

      <Text 
        style={{ margin: 15 }}
      >
        Eu li e aceito os 
        <Text
        style={{ color: 'blue' }}
        > Termos de Serviço</Text>
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '300px',
          height: '40px',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10
        }}
        onPress={() => navigation.navigate('Contatos')}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '15px'
          }}
        >
          Criar conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Contatos ({ navigation }) {
  return(
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#BCBCBC'
        }}
      >
        <Text
          style={{fontFamily: 'Roboto', fontSize: '22px'}}
        >
          Alanlove
        </Text>
        <Text
          style={{fontFamily: 'Roboto', fontSize: '16px'}}
        >
          (68)99951-9090
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function Adicionar ({ navigation }) {
  <View 
      style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
      <label
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          fontFamily: 'monospace',
          margin: 4
        }}
      >
        Nome
      </label>
      <input
        placeholder='Digite seu nome'
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          fontSize: '15px',
          margin: 4
        }}
      />

      <label
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          fontFamily: 'monospace',
          margin: 4
        }}
      >
        Telefone
      </label>
      <input
        placeholder='Digite seu telefone'
        style={{
          width: '300px',
          height: '40px',
          borderRadius: '5px',
          fontSize: '15px',
          margin: 4
        }}
      />
  
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '300px',
          height: '40px',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10
        }}
      // onPress={() => navigation.navigate('Criar conta')}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '15px'
          }}
        >
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Foo App" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Criar conta" component={CriarConta} />
        <Stack.Screen name="Adicionar" component={Adicionar} /> */}
        <Stack.Screen name="Contatos" component={Contatos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
