import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome To Page Home'
        };
    }

    pindahPage() {
        this.props.navigation.navigate('About');
    }

    render() {
        const { title } = this.state;
        const { container } = styles;
        return (
            <View style={container}>
                <Text>
                    {title}
                </Text>
                <TouchableOpacity
                    style={{ borderColor: 'red', borderWidth: 1 }}
                    onPress={() => {
                        this.pindahPage();
                    }}
                >
                    <Text>
                        Pindah
                </Text>
                </TouchableOpacity>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomePage;