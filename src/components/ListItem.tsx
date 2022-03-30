import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

interface IListItem {
  name: string;
  symbol: string;
  currentPrice: number;
  priceChangePercentage7d: number;
  logoUrl: string;
}

const ListItem: React.FC<IListItem> = (props) => {
  const priceChangeColor = props.priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image style={styles.image} source={{ uri: props.logoUrl }} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.subtitle}>{props.symbol.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            {Number(props.currentPrice).toLocaleString("en-US", {
              currency: "USD",
            })}
          </Text>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {props.priceChangePercentage7d.toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
});
