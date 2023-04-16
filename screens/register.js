import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native'
import { useState } from 'react'

const initialState = {
  login: '',
  email: '',
  password: '',
}

export default function RegistrationScreen() {
  const [state, setState] = useState({ ...initialState })
  const [isKeyboardShown, setIsKeyboardShown] = useState(false)

  const hideKeyboard = () => {
    setIsKeyboardShown(false)
    Keyboard.dismiss()
  }

  const onLoginChange = (value) => {
    setState((prevState) => ({ ...prevState, login: value }))
  }
  const onEmailChange = (value) => {
    setState((prevState) => ({ ...prevState, email: value }))
  }
  const onPasswordChange = (value) => {
    setState((prevState) => ({ ...prevState, password: value }))
  }

  const onSubmit = () => {
    hideKeyboard()
    setState(initialState)
  }

  const { login, email, password } = state
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../assets/images/PhotoBG.png')}
        >
          <View style={styles.backForm}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <View style={styles.form}>
                <Image
                  style={styles.ava}
                  source={require('../assets/images/Rectangle22.png')}
                />
                <TouchableOpacity>
                  <Image
                    style={styles.add}
                    source={require('../assets/images/add.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.register}>Регистрация</Text>
                <View>
                  <TextInput
                    style={styles.input}
                    value={login}
                    placeholder="Login"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={onLoginChange}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#BDBDBD"
                    onChangeText={onEmailChange}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}
                    onChangeText={onPasswordChange}
                  />
                </View>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.9}
                  onPress={onSubmit}
                  s
                >
                  <Text style={styles.btnText}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>
                  Уже есть аккаунт? Войти
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  ava: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    marginBottom: 32,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    resizeMode: 'contain',
    borderRadius: 16,
  },
  add: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: 35 }, { translateY: -80 }],
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginBottom: 33,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    paddingLeft: 16,
    marginBottom: 16,
  },
  button: {
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    color: '#fff',
  },
  backForm: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#fff',
  },
  form: {
    position: 'relative',
    paddingTop: 92,
    marginHorizontal: 16,
    marginBottom: 80,
  },
})
