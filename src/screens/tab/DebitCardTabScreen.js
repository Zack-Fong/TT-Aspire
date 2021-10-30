import React from 'react';

import ScrollViewComponent from '../../component/ScrollView';

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
            <ScrollViewComponent isLoading={this.state.isLoading}>
            </ScrollViewComponent>
        )
    }
}
export default DebitCardTabScreen;