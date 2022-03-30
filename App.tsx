import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import ListItem from "./src/components/ListItem";
import data from "./src/data/sampleData.json";

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider}></View>
  </>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id + item.name}
        data={data}
        ListHeaderComponent={<ListHeader />}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            currentPrice={item.priceChange.price}
            logoUrl={item.logo}
            priceChangePercentage7d={item.priceChange.priceChange7d}
            symbol={item.symbol}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
