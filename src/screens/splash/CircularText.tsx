import React, { useEffect, useRef } from 'react';
import { View, Dimensions, Animated, Easing } from 'react-native';
import Svg, {
    Defs,
    Path,
    Text as SvgText,
    TextPath,
    LinearGradient,
    Stop,
} from 'react-native-svg';
import Strings from '@theme/strings/Strings';
import colors from '@theme/themes/Colors';

const { width } = Dimensions.get('window');
const radius = width * 0.3;

const AnimatedTextPath = Animated.createAnimatedComponent(TextPath);

interface Props {
    testID?: string;
}


const CircularMovingTextWithDestroyedTail: React.FC<Props> = ({ testID }) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 100,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ).start();
    }, [animation]);

    const startOffset = animation.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View testID={testID} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Svg width={radius * 2 + 40} height={radius * 2 + 40}>
                <Defs>
                    <Path
                        id="circle"
                        d={`
              M ${radius + 20}, ${radius + 20}
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
                    />

                    {/* Gradient for fading out the tail */}
                    <LinearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor={colors.white} stopOpacity="1" />
                        <Stop offset="80%" stopColor={colors.white} stopOpacity="1" />
                        <Stop offset="100%" stopColor={colors.white} stopOpacity="0" />
                    </LinearGradient>
                </Defs>

                <SvgText
                    fill="url(#fadeGradient)"
                    fontSize="28"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    <AnimatedTextPath href="#circle" startOffset={startOffset}>
                        {Strings.RISK_SURVEY}
                    </AnimatedTextPath>
                </SvgText>
            </Svg>
        </View>
    );
};

export default CircularMovingTextWithDestroyedTail;
