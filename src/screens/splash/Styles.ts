import { StyleSheet, Dimensions } from "react-native";
import colors from "@theme/themes/Colors";

const { width } = Dimensions.get('window');
const circleSize = width * 0.6;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primaryColor,
    },
    title: {
      color: colors.white,
      fontSize: 30,
      fontWeight: 'bold',
    },
    circle: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor: colors.primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });

  export default styles;