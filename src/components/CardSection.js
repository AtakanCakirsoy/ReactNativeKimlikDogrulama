import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.subContainerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
};
export default CardSection;

//her seferinde bir login form yapısı oluşturmak yerine bir kere
//oluşturup bunları çağırmak için yaptık. CardSection içindeki yerler.