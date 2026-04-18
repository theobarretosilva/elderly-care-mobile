import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';
import { indexStyles } from '@/src/styles/index.styles';
import { useFonts } from 'expo-font';
import { useAuth } from '@/src/context/AuthContext';

export default function SplashScreen() {
  const router = useRouter();
  const { token, loading } = useAuth();

  const opacity = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(0.85)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  const [fontsLoaded] = useFonts({
    Urbanist: require('../assets/fonts/Urbanist.ttf'),
  });

  useEffect(() => {
    if (loading) return;

    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1.05,
          friction: 5,
          useNativeDriver: true,
        }),
      ]),
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        if (token) {
          router.replace('/(tabs)');
        } else {
          router.replace('/login');
        }
      });
    });
  }, [token, loading, logoOpacity, logoScale, opacity, router]);

  if (!fontsLoaded || loading) return null;

  return (
    <Animated.View
      style={[
        indexStyles.container,
        { opacity },
      ]}
    >
      <Animated.View
        style={{
          opacity: logoOpacity,
          transform: [{ scale: logoScale }],
        }}
      >
        <Image
          source={require('../assets/images/logo_fundo_claro.png')}
          style={indexStyles.img}
          resizeMode="contain"
        />
      </Animated.View>
    </Animated.View>
  );
}