import { StyleSheet,Platform } from "react-native";
import colors from "@theme/themes/Colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    headerView:{
      flex: Platform.OS === 'ios' ? 0.13 : 0.1,
      backgroundColor: colors.primaryColor,
      alignItems:'center',
      justifyContent:'flex-end',
      borderBottomLeftRadius:18,
      borderBottomRightRadius:18
    },
    headerText: {
      fontSize: 23, 
      fontWeight: 'bold', 
      color: colors.white,
      paddingBottom:15,
      fontFamily:'Ubuntu-Bold'
    },
    questionProgressView:{
      flex:0.1,
    },
    questionProgressCircle:{
      height:60,
      width:60,
      alignSelf:'flex-end',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:colors.primaryColor,
      borderRadius:30,
      top:10,
      right:10,
    },
    numberText:{
      fontSize: 15, 
      fontWeight: 'bold', 
      color: colors.white
    },
    carouselView:{
      flex:0.62,
    },
    buttonContainer: {
      flex:0.15,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
    },

     // question
    
     questionContainer: {
      justifyContent: 'center',
      paddingHorizontal: 5,
      marginHorizontal: 15,
      paddingTop: 15,
    },
  question: {
      fontWeight: 'bold',
      marginBottom: 25,
      fontSize: 17,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 7,
      paddingVertical: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.primaryColor,
    },
    questionText: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  });

  export default styles