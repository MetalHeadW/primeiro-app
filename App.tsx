import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function App() {
const [selecionado, setSelecionado] = useState<boolean>(false);
return (
<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
<View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
<View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
<View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
</View>
);

}
const styles = StyleSheet.create({texto: {
fontFamily: 'System',
marginBottom: 15,
padding: 5,
},
titulo: {
fontSize: 24
},
textoDestacado: {
color: '#0066CC',
fontWeight: 'bold',
backgroundColor: '#E6F0FF',
},
botao: {
backgroundColor: '#4CAF50',
padding: 10,
borderRadius: 5,
alignItems: 'center',
marginTop: 10,
}
});


