import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome To Page About'
        };
    }

    render() {
        const { title } = this.state;
        const { container } = styles;
        return (
            <View style={container}>
                <Text>
                    {title}
                </Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default About;