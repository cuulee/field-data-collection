import React, { Component } from "react";
import { View, TouchableHighlight, TouchableOpacity } from "react-native";

import Text from "./text";
import { colors } from "../styles";
import { baseStyles } from "../styles";

class MapList extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    return (
      <View style={[baseStyles.nearbyPoints]}>
        <View style={[baseStyles.nearbyPointsHeader]}>
          <View style={[baseStyles.nearbyPointsDescription]}>
            <Text style={[baseStyles.h4]}>Nearby Points</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text>Location: </Text>
              <Text>49° N 100° E</Text>
            </View>
          </View>
          <View style={[baseStyles.rightSideContent]}>
            <TouchableOpacity
              style={[baseStyles.buttonOutline]}
              onPress={this._onPressButton}
            >
              <Text>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*<View>
          <View style={[baseStyles.cardStyle]}>
            <Text style={[baseStyles.h3]}>Ballard Elementary School</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text>30cm away</Text>
              <View>
                <Text>Updated: </Text>
                <Text>4/30/17 4:30</Text>
              </View>
            </View>
            <View
              style={[
                baseStyles.observationBlock,
                { flexDirection: "row", flexWrap: "wrap" }
              ]}
            >
              <Text style={[baseStyles.metadataText]}>2 Observations</Text>
              <Text style={[baseStyles.textAlert]}>(2 incomplete)</Text>
            </View>
          </View>
        </View>*/}
      </View>
    );
  }
}

export default MapList;
