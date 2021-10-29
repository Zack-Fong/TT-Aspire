import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActivityIndicatorComponent from '../../component/ActivityIndicator';
import { COLORS } from '../../common/colors';

class DebitCardTabScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.DARK_BLUE }}>
                <ActivityIndicatorComponent
                    isShow={this.state.isLoading}
                />
            </SafeAreaView>
        )
    }
}
export default DebitCardTabScreen;