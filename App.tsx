/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View } from "react-native";

import SplashScreen from "./src/splashScreen";
import { useEffect, useState } from "react";
import TodoApp from "./src/TodoList";




function App(): JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 8000); // Simulate a delay for demonstration purposes
  }, []);

  return (
 <View style={styles.container}>
  {
    showSplash ?     <SplashScreen/> : <TodoApp/>
  }

 </View>
 
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});

export default App;
