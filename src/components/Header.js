import React from 'react';
import { Text, View } from 'react-native';
//(props) yazdık ve text'in içindeki yazıyı değiştirdik. Bunun sebebi Headerı dinamik yapmak istedik
//yani bir sayfada değilde, birden fazla sayfada Header kullanacaksak sadece diğer sayfalarda
//<Header headerText={'Örnek Proje'}/> yazmamız yeterli olucak.
//(props) yazdığımız yerler yerine headerText'te yazsak çalışır. Ancak birden fazla properties
//göndermemiz gerektiğinde tek tek protertieslerin adını yazmak zorunda kalırdık.
const Header = (props) => {
    const { textStyle, viewStyle } = styles; //Böyle bir tanımlama yaptık.
    //çünkü büyük projelerde karışıklık olmasın diye. Bu yapımı yazmaz isek styles.textstyle yazmalıyız text tagından sonra.
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        height: 60,
        justifyContent: 'center', //dikey 
        alignItems: 'center', //yatay
        marginTop: 20,
        shadowOffset: { width: 0, height: 2 }, //Gölge oluşturmak için
        shadowOpacity: 0.2,

    }
};

//Header dosyasını dışarı aktarmak için yazdık
export default Header;