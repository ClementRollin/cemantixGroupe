import { useEffect } from "react";
import {Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Loading() {

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View>
            <Text>Loading</Text>
        </View>
    );
}