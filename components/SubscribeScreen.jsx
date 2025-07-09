import * as React from "react";
import { Alert, Image, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import { validateEmail } from "../utils";

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");

  const isEmailValid = validateEmail(email);

  const handleSubscribe = () => {
    if (Platform.OS === "web") {
      // ✅ Use window.alert for Web
      window.alert("Sucessfully loged in !");
      navigation.navigate("Menu");
    } else {
      // ✅ Use Alert.alert for iOS/Android
      Alert.alert(
        "Sucessfully loged in !",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Menu"),
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/little-lemon-logo-grey.png")}
      />
      <Text style={styles.title}>
        Login to order your food             
       </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Type your email"}
      />
      <Button onPress={handleSubscribe} disabled={!isEmailValid}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
    marginLeft: 20,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
});

export default SubscribeScreen;
