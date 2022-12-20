import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { AppBar } from '../../ui/AppBar';


export function JugadorCarousel({
    navigation,
    route
}) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const data = route.params;
    return (
        <View style={styles.container}>
            <AppBar
                title="Imagenes jugador"
                isBackButtonShown
                isHomeButtonShown
                navigation={navigation}
            />
            <View>
                <Image
                    style={styles.img}
                    source={{
                        uri: route.params[currentImageIndex],
                    }}
                />
            </View>
            <View style={styles.controlsContainer}>
                <Button
                    title="< Anterior"
                    onPress={() => setCurrentImageIndex(currentImageIndex - 1 < 0 ? data.length - 1 : currentImageIndex - 1)}
                />
                <Text>{`${currentImageIndex + 1}/${data.length}`}</Text>
                <Button
                    title="Siguiente >"
                    onPress={() => setCurrentImageIndex((currentImageIndex + 1) % data.length)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    img: {
        width: '100%',
        height: '300px',
    },
    controlsContainer: {
        flex: 1,
        width: '100%',
        height: '100px',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
});
