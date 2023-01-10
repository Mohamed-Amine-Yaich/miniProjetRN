import React, { useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, ScrollView,Dimensions,ActivityIndicator } from "react-native";

import Masonry from "react-native-masonry-layout";
import Pin from "../components/Pin";


export default function ProfileScrren(props) {
  
  const [pins, setPins] = useState([]);
  const [Loading, setLoading] = useState(false);

  const refs = React.useRef();

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
  }, []);
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
  

  

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name={"share"} size={20} style={styles.icon} />
          <Entypo
            name={"dots-three-horizontal"}
            size={20}
            style={styles.icon}
            onPress={()=>{}}
          />
        </View>
        <Image
          source={{
            uri: "https://1734811051.rsc.cdn77.org/data/images/full/372135/attn-cat-lovers-scientists-claim-using-profile-pics-of-your-and-your-cat-wont-give-you-a-date.jpg",
          }}
          style={styles.profileImg}
        /> 
        <Text style={styles.title}>current user</Text>
        <Text style={styles.subTitle}>152 Following | 565 Followers </Text>
      </View>
       
      <Masonry
      refreshing={Loading}
      onRefresh={fetchPins}
      ref={refs}
    
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
  header: {
    flex: 1/2,
    alignItems: "center",
    justifyContent: "center",
  
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 5,
  },
  icon: {
    padding: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "600",
    margin: 10,
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 20,
  },
});
