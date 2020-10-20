import { StatusBar } from 'expo-status-bar';
import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                button: {
                    alignItems: "center",
                    backgroundColor: "#DDDDDD",
                    padding: 10,
                    margin:10
                },
            });
    }

    onPress = () => this.setState({visible: !this.state.visible});

    render() {
        return (

            <View style={this.styles.container}>
                <Text>Zadanie 2</Text>
                <TouchableOpacity
                    style={this.styles.button}
                    onPress={this.onPress}
                >
                    {
                        this.state.visible ? (<View><Text>Ukryj</Text></View>) : (<View><Text>Pokaz</Text></View>)
                    }

                </TouchableOpacity>
                {
                    this.state.visible ? (<View><Text>Mateusz Mądel</Text></View>) : null
                }
                <StatusBar style="auto"/>
            </View>
        );
    }
}

