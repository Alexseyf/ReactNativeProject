import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#c9d1d9';
const colorFontDarkGithub = '#4f565e'
const darkGreen = '#1a5c2c'
const green = '#39d353'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/79027790?v=4'
const urlToGithub = 'https://github.com/Alexseyf'
const urlToDIO = 'https://www.dio.me/sign-in'

const App = () => {

  const handlePressToGithub = async ()=>{
   const res = await Linking.canOpenURL(urlToGithub);
   if(res){
     await Linking.openURL(urlToGithub);
   }
  }

  const DIOconquests = async ()=>{
    const res = await Linking.canOpenURL(urlToDIO);
    if(res){
      await Linking.openURL(urlToDIO);
    }
   }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
      <View style={style.content}>
        <Image accessibilityLabel='Foto de Alexandre Seyffert' style={style.avatar} source={{uri: imageProfileGithub}}/>
        <Text accessibilityLabel='Nome: Alexandre Seyffert' style={[style.defaultText, style.name]}>Alexandre Seyffert</Text>
        <Text accessibilityLabel='Nickname: Alexseyf' style={[style.defaultText, style.nickname]}>Alexseyf</Text>
        <Text accessibilityLabel='Descrição: Estudante de Análise e Desenvolvimento de Sistemas' style={[style.defaultText, style.description]}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
        <Pressable onPress={DIOconquests}>
        <View style={style.lineCell}>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        </View>
        <View style={style.lineCell}>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        </View>
        <View style={style.lineCell}>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        </View>
        <View style={style.lineCell}>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        </View>
        <View style={style.lineCell}>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.cell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        </View>
        <View style={style.lineCell}>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        <Text style={style.darkCell}></Text>
        </View>
        </Pressable>
        <Pressable onPress={handlePressToGithub}>
        <View style={style.button}>
          <Text style={style.textButton}>Open in Github</Text>
        </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


export default App;

const style = StyleSheet.create({
  container: {
    // Column por padrão
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row'
  },
  content: {
    alignItems: 'center',
    padding: 20
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'white',
    borderWidth: 2
  },
  defaultText: {
    color: colorFontGithub
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: colorFontGithub
  },
  nickname: {
    fontSize: 18,
    color: colorFontDarkGithub,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorFontGithub,
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    marginTop: 30,
    backgroundColor: colorFontDarkGithub,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  textButton: {
    color: colorFontGithub,
    fontSize: 16,
    fontWeight: 'bold'
  },
  darkCell: {
    margin: 1,
    height: 15,
    width: 15,
    borderRadius: 4,
    backgroundColor: darkGreen
  },
  cell: {
    margin: 1,
    height: 15,
    width: 15,
    borderRadius: 4,
    backgroundColor: green
  },
  lineCell: {
    flexDirection: 'row'
  }
});
