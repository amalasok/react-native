import React, { useState } from "react";
import { View, Text } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const pick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setSelectedImg(image.path)
      // console.log(image.path);
    });
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Avatar
        size="xlarge"

        onPress={() => pick()}
        activeOpacity={1}
        rounded
        source={{
          uri:
            selectedImg,
        }}
        overlayContainerStyle={{}}
      >

      </Avatar>
      <Text style={{ fontSize: 20, color: "red" }}>Press the above circle</Text>



    </View>
  );
};

export default App;
