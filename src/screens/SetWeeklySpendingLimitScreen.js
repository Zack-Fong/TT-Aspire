import React from 'react';

import ScrollViewComponent from '../component/ScrollView';

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
            <ScrollViewComponent spendingLimit isLoading={this.state.isLoading}>
            </ScrollViewComponent>
        )
    }
}
export default SetWeeklySpendingLimitScreen;