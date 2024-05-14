import { useEffect } from "react";
import {View} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Loading() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View>
        </View>
    );
}