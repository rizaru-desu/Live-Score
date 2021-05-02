import React, { Component } from "react";
import { StatusBar, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";

//RESPONSIVE SCREEN
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT ELEMENT
import { Avatar, Divider } from "react-native-elements";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class DetailMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Access the postId and otherParam via Destructuring assignment
    const {
      imagesHome,
      HomeName,
      HomeScore,
      imagesAway,
      AwayName,
      AwayScore,
      HomehalfTime,
      HomeredCard,
      HomeyellowCard,
      HomecornerKick,
      HomeoverTimeScore,
      HomepenaltyShootOutScore,
      AwayhalfTime,
      AwayredCard,
      AwayyellowCard,
      AwaycornerKick,
      AwayoverTimeScore,
      AwaypenaltyShootOutScore,
    } = this.props.route.params;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar hidden />

        <LinearGradient // Background Linear Gradient
          colors={["#F12711", "#F5AF19", "transparent"]}
          style={{ height: hp("50%") }}
        />

        <View style={{ flex: 1, position: "absolute" }}>
          <View
            style={{
              width: wp("90%"),
              backgroundColor: "white",
              borderRadius: wp("3%"),
              marginHorizontal: hp("3%"),
              marginVertical: hp("10%"),
              padding: hp("3%"),
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  margin: hp("1%"),
                }}
              >
                <Avatar
                  size="large"
                  imageProps={{ resizeMode: "contain" }}
                  source={{
                    uri: imagesHome,
                  }}
                />
                <Text
                  style={{ textAlign: "center", fontSize: 14, marginTop: 3 }}
                >
                  {HomeName}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ flex: 1, textAlign: "center", fontSize: 36 }}>
                  {HomeScore}
                </Text>
                <Text style={{ flex: 1, textAlign: "center", fontSize: 36 }}>
                  -
                </Text>
                <Text style={{ flex: 1, textAlign: "center", fontSize: 36 }}>
                  {AwayScore}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  margin: hp("1%"),
                }}
              >
                <Avatar
                  size="large"
                  imageProps={{ resizeMode: "contain" }}
                  source={{
                    uri: imagesAway,
                  }}
                />
                <Text
                  style={{ textAlign: "center", fontSize: 14, marginTop: 3 }}
                >
                  {AwayName}
                </Text>
              </View>
            </View>
            <Divider height={2} style={{ backgroundColor: "#F5AF19" }} />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: hp("1%"),
              }}
            >
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {HomehalfTime}{" "}
              </Text>
              <Text style={{ fontSize: 12, flex: 1, textAlign: "center" }}>
                Half Time
              </Text>
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {" "}
                {AwayhalfTime}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: hp("1%"),
              }}
            >
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {HomeredCard}{" "}
              </Text>
              <Text style={{ fontSize: 12, flex: 1, textAlign: "center" }}>
                Red Card
              </Text>
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {" "}
                {AwayredCard}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: hp("1%"),
              }}
            >
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {HomeyellowCard}{" "}
              </Text>
              <Text style={{ fontSize: 12, flex: 1, textAlign: "center" }}>
                Yellow Card
              </Text>
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {" "}
                {AwayyellowCard}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: hp("1%"),
              }}
            >
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {HomecornerKick}{" "}
              </Text>
              <Text style={{ fontSize: 12, flex: 1, textAlign: "center" }}>
                Corner Kick
              </Text>
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {" "}
                {AwaycornerKick}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: hp("1%"),
              }}
            >
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {HomeoverTimeScore}{" "}
              </Text>
              <Text style={{ fontSize: 12, flex: 1, textAlign: "center" }}>
                Over Time Score
              </Text>
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {" "}
                {AwayoverTimeScore}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: hp("1%"),
              }}
            >
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {HomepenaltyShootOutScore}{" "}
              </Text>
              <Text style={{ fontSize: 12, flex: 1, textAlign: "center" }}>
                Penalty Shoot Out Score
              </Text>
              <Text style={{ fontSize: 24, flex: 1, textAlign: "center" }}>
                {" "}
                {AwaypenaltyShootOutScore}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
