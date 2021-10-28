import React from 'react';
import { SafeAreaView } from 'react-native';

import ActivityIndicatorComponent from '../component/ActivityIndicator';

class SetWeeklySpendingLimitScreen extends React.Component {
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
            <SafeAreaView>
                <ActivityIndicatorComponent
                    isShow={this.state.isLoading}
                />
            </SafeAreaView>
        )
    }
}
export default SetWeeklySpendingLimitScreen;