import React, { Component } from "react";
import { StyleSheet, View, ListView, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

import { Text, Wrapper } from "../../components";
import { baseStyles } from "../../styles";

const styles = StyleSheet.create({
  gridContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
  },
  gridItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    margin: 5,
    width: 80,
    height: 80
  },
  moreItemsButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 20
  }
});

class CategoriesScreen extends Component {
  componentWillMount() {
    const { observationTypes } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      categories: ds.cloneWithRows(
        observationTypes.map(t => ({
          id: t.id,
          name: t.name
        }))
      )
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Wrapper>
        <Text style={baseStyles.title}>
          What do you want to add?
        </Text>

        <ListView
          contentContainerStyle={styles.gridContainer}
          dataSource={this.state.categories}
          noScroll={true}
          renderRow={item => {
            function onCategoryPress() {
              navigate("AddObservation", { observationType: item.id });
            }

            return (
              <TouchableHighlight onPress={onCategoryPress}>
                <View style={styles.gridItem}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
        />

        <View style={styles.moreItemsButton}>
          <Text style={{}} onPress={() => {}}>View More</Text>
        </View>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const survey = state.surveys[0];

  const observationTypes = survey.observationTypes.map(t =>
    survey.featureTypes.find(x => x.id === t)
  );

  return {
    observationTypes
  };
};

export default connect(mapStateToProps)(CategoriesScreen);