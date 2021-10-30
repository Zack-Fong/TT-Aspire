import React from "react";
import { View, Text } from "react-native";

import { FONT_FAMILY } from "../assets/fonts";

class ScreenTitleComponent extends React.PureComponent {
    render() {
        return (
            <View style={{ height: 33, marginLeft: 24 }}>
                <Text style={{ fontFamily: FONT_FAMILY.BOLD, fontSize: 24, color: "white" }}>
                    {this.props.screenTitle}
                </Text>
            </View>
        )
    }
}
export default ScreenTitleComponent;