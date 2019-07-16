import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size /*özellik olarak size alabilmesi için bu şekilde belirttik. */ }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} /> {/* soldaki ifade, size değer alsın yada almıyorsa large olsun demek. */}
        </View>
    );
};
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
};

export default Spinner;