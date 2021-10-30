import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { images } from "../assets/assets";

class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <View style={{
                height: 56, paddingRight: 24, paddingLeft: 20, flexDirection: "row", justifyContent: this.props.showBackArrow ? 'space-between' : "flex-end", alignItems: "center"
            }}>
                {this.props.showBackArrow ?
                    <TouchableOpacity onPress={this.props.onPressBackArrow}>
                        <Image
                            style={{
                                width: 25,
                                height: 25
                            }}
                            source={images.backArrow}
                        />
                    </TouchableOpacity> : null
                }

                <Image
                    style={{
                        width: 25,
                        height: 25
                    }}
                    source={images.greenLogo}
                />
            </View>
        )
    }
}
export default HeaderComponent;