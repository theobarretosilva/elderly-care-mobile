import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { indexStyles } from '@/src/styles/index.styles';
import { useFonts } from 'expo-font';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/initial');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  const [fontsLoaded] = useFonts({
    Urbanist: require('../assets/fonts/Urbanist.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={indexStyles.container}>
      <Image 
        source={require('../assets/images/logo_fundo_claro.png')}
        style={indexStyles.img}
        resizeMode='contain'
      />
    </View>
  )
}