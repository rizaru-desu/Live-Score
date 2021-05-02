import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  RefreshControl,
  LogBox,
} from "react-native";

//RESPONSIVE SCREEN
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//GRADIENT COLOR
import { LinearGradient } from "expo-linear-gradient";

//GET & POST API
import axios from "axios";

//LODASH ARRAY OF OBJECT JSON
import _ from "lodash";

//REACT ELEMENT
import { Avatar, Input } from "react-native-elements";

//VECTOR EXPO
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

//DATE PICKER
import DateTimePickerModal from "react-native-modal-datetime-picker";

//DATE FORMAT (TIMESTAMP CONVERT TO HUMAN TIME)
import moment from "moment";

//ANIMATED LOADER
import AnimatedLoader from "react-native-animated-loader";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Bolean loading progress
      _loader: false,

      //Get date current
      datePicker: new Date(),
      isDatePickerVisible: false,

      //Catch array from API
      arrData: "",

      //Refresh
      isRefreshing: false,
    };

    //Array for searching
    this.DATA = [];

    LogBox.ignoreAllLogs(true);
  }

  async componentDidMount() {
    this.setState({ _loader: true });
    this.interval = setTimeout(() => {
      this.makeRemoteRequest();
    }, 5000);
  }

  makeRemoteRequest = _.debounce(() => {
    this.setState({ _loader: true });
    axios
      .get("https://client.elevenscore.com/api/football/match/matchfixtures/", {
        params: {
          utc: 1,
          date: moment(this.state.datePicker).format("YYYYMMDD"),
        },
        headers: {
          "X-Api-Key": `24578cdb-fc01-4794-9bb0-865dd8ac405c`,
        },
      })
      .then((res) => {
        this.setState({
          arrData: res.data.result,
          _loader: false,
          isRefreshing: false,
        });
        this.DATA = res.data.result;
        //console.log(this.state.datePicker);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  onRefresh() {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    this.makeRemoteRequest();
  }

  async componentWillUnmount() {
    clearTimeout(this.interval);
  }

  searchFilterFunction = (text) => {
    const newData = this.DATA.filter((item) => {
      const itemData = `${
        (item.homeTeamEvent.name.toUpperCase(),
        item.awayTeamEvent.name.toUpperCase())
      } `;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ arrData: newData });
  };

  render() {
    const showDatePicker = () => {
      this.setState({ isDatePickerVisible: true });
    };

    const hideDatePicker = () => {
      this.setState({ isDatePickerVisible: false });
    };

    const handleConfirm = (date) => {
      this.setState({ datePicker: date });
      this.makeRemoteRequest();
      hideDatePicker();
    };

    const Item = ({
      matchTimeStamp,
      imagesHome,
      HomeName,
      HomeScore,
      imagesAway,
      AwayName,
      AwayScore,
      countryName,

      HomeleagueRank,
      HomehalfTime,
      HomeredCard,
      HomeyellowCard,
      HomecornerKick,
      HomeoverTimeScore,
      HomepenaltyShootOutScore,

      AwayleagueRank,
      AwayhalfTime,
      AwayredCard,
      AwayyellowCard,
      AwaycornerKick,
      AwayoverTimeScore,
      AwaypenaltyShootOutScore,
    }) => (
      <TouchableWithoutFeedback
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() =>
          this.props.navigation.navigate("Details", {
            imagesHome: imagesHome,
            imagesAway: imagesAway,
            HomeName: HomeName,
            AwayName: HomeName,
            HomeScore: AwayScore,
            AwayScore: AwayScore,
            HomeleagueRank: HomeleagueRank,
            HomehalfTime: HomehalfTime,
            HomeredCard: HomeredCard,
            HomeyellowCard: HomeyellowCard,
            HomecornerKick: HomecornerKick,
            HomeoverTimeScore: HomeoverTimeScore,
            HomepenaltyShootOutScore: HomepenaltyShootOutScore,
            AwayleagueRank: AwayleagueRank,
            AwayhalfTime: AwayhalfTime,
            AwayredCard: AwayredCard,
            AwayyellowCard: AwayyellowCard,
            AwaycornerKick: AwaycornerKick,
            AwayoverTimeScore: AwayoverTimeScore,
            AwaypenaltyShootOutScore: AwaypenaltyShootOutScore,
          })
        }
      >
        <View
          style={{
            width: wp("90%"),
            backgroundColor: "white",
            borderRadius: wp("3%"),
            margin: hp("3%"),
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
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              marginBottom: 2,
              color: "#F5AF19",
            }}
          >
            {moment(matchTimeStamp * 1000).format("dddd, DD MMMM YYYY")}
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{ textAlign: "center", fontSize: 16, marginHorizontal: 5 }}
            >
              {countryName}
            </Text>
          </View>

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
              <Text style={{ textAlign: "center", fontSize: 14, marginTop: 3 }}>
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
              <Text style={{ textAlign: "center", fontSize: 14, marginTop: 3 }}>
                {AwayName}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );

    const renderItem = ({ item }) => (
      <Item
        matchTimeStamp={item.matchTimeStamp}
        imagesHome={item.homeTeamEvent.logoUrl}
        HomeName={item.homeTeamEvent.name}
        HomeScore={item.homeTeamEvent.score}
        imagesAway={item.awayTeamEvent.logoUrl}
        AwayName={item.awayTeamEvent.name}
        AwayScore={item.awayTeamEvent.score}
        countryName={item.countryName}
        HomehalfTime={item.homeTeamEvent.halfTime}
        HomeredCard={item.homeTeamEvent.redCard}
        HomeyellowCard={item.homeTeamEvent.yellowCard}
        HomecornerKick={item.homeTeamEvent.cornerKick}
        HomeoverTimeScore={item.homeTeamEvent.overTimeScore}
        HomepenaltyShootOutScore={item.homeTeamEvent.penaltyShootOutScore}
        AwayhalfTime={item.awayTeamEvent.halfTime}
        AwayredCard={item.awayTeamEvent.redCard}
        AwayyellowCard={item.awayTeamEvent.yellowCard}
        AwaycornerKick={item.awayTeamEvent.cornerKick}
        AwayoverTimeScore={item.awayTeamEvent.overTimeScore}
        AwaypenaltyShootOutScore={item.awayTeamEvent.penaltyShootOutScore}
      />
    );

    return (
      <SafeAreaView style={styles.view}>
        <LinearGradient // Background Linear Gradient
          colors={["#F12711", "#F5AF19", "transparent"]}
          style={{ height: hp("50%") }}
        />

        <View
          style={{
            width: wp("100%"),
            height: hp("100%"),
            position: "absolute",
            backgroundColor: "transparent",
            alignItems: "center",
            marginTop: hp("5%"),
          }}
        >
          <AnimatedLoader
            visible={this.state._loader}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../soccer.json")}
            animationStyle={{ height: hp("50%") }}
            speed={1}
          />
          <View
            style={{
              width: wp("80%"),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              placeholder="Search"
              inputStyle={{ color: "white" }}
              inputContainerStyle={{ borderBottomColor: "white" }}
              placeholderTextColor={"#EAEFF2"}
              leftIcon={
                <MaterialIcons name="saved-search" size={24} color="white" />
              }
              onChangeText={(text) => this.searchFilterFunction(text)}
              value={this.state.text}
            />
            <TouchableWithoutFeedback
              onPress={showDatePicker}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Ionicons name="calendar" size={30} color="white" />
            </TouchableWithoutFeedback>
          </View>
          <Text style={{ fontSize: hp("5%"), color: "white" }}>MATCHES</Text>
          <FlatList
            style={{ padding: 5, flex: 1 }}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
            data={this.state.arrData}
            renderItem={renderItem}
            keyExtractor={(item) => item.gameId.toString()}
          />
          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "white" },
});
