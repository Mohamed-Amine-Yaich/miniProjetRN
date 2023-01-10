import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Pin from "../components/Pin";

import Masonry from "react-native-masonry-layout";
import { useNavigation, NavigationContext } from "@react-navigation/native";

export default function HomeScrren(props) {
  const [pins, setPins] = useState([]);
  const [Loading, setLoading] = useState(false);

  const refs = React.useRef();

  const navigation = React.useContext(NavigationContext);

  const load = () => {
    refs.current.addItems(pins);
  };

  React.useEffect(() => {
    if (refs?.current) {
      if (pins) {
        load();
      }
    }
  }, [pins]);

  React.useEffect(() => {
    fetchPins();
  }, [pins]);
  React.useEffect(() => {
    fetchPins();
  }, [navigation]);
  React.useEffect(() => {
    fetchPins();
  });

  const fetchPins = async () => {
    setLoading(true);

    if (props.data.length >= 1) {
      setPins(props.data);
      setLoading(false);
    }
    setLoading(false);
  };

  const windowWidth = Math.ceil(Dimensions.get("window").width / 350);
  console.log(props.data[0]);
  if (props.data.length < 1) {
    return <ActivityIndicator size={30} />;
  }

  return (
    <ScrollView onScrollToTop={fetchPins}>{/* not working fetch new ping when scrolll */}
      <Masonry
        refreshing={Loading}
        onRefresh={fetchPins}
        ref={refs}
        /*  style={{ flex: 1, borderWidth: 1, borderColor: 'red' }} */
        columns={windowWidth} // optional - Default: 2
        renderItem={(item, index) => (
          <Pin
            key={index}
            pin={{ uri: item.image, title: item.title, id: index }}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 5,
  },
});
