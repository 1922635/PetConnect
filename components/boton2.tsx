import { useState } from "react";
import { Pressable, StyleProp, TextStyle, Image, ImageStyle, ImageSourcePropType } from 'react-native';
import { Link, RelativePathString } from "expo-router";

interface Props {
    estilo1?: StyleProp<TextStyle>,
    estilo2?: StyleProp<TextStyle>,
    link: RelativePathString,
    imagen: ImageSourcePropType,
    estiloImagen: StyleProp<ImageStyle>,
}

export const Boton2 = ({link, estilo1, estilo2, imagen, estiloImagen}:Props) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <Pressable>
            <Link
                style={[estilo1, isPressed && estilo2]}
                onPressIn={handlePress}
                onPressOut={handlePress}
                href={link}><Image style={estiloImagen} source={imagen}></Image></Link>
        </Pressable>
    );
};

