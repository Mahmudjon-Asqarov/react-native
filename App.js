import {
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageBg}
        blurRadius={1}
        source={{
          uri: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
        }}
      />
      <Text style={styles.loader}>Mahmudjon Asqarov</Text>
      <View>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit odio maxime voluptate mollitia officia! Quia porro sequi
          quidem adipisci consequuntur.
        </Text>
      </View>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: StatusBar.currentHeight,
  },
  imageBg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    resizeMode: "cover",
    zIndex: -1,
  },
  loader: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 20,
    zIndex: 2,
    marginBottom: 455,
  },
});
