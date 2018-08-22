import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

import { connect } from 'react-redux';
import * as countActions from '../Actions/countAction'

// import styles from '..'
class MainScreen extends Component {

  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  plusCounter () {
    const { actions } = this.props
    actions.incrementCount({})
  }

  minusCounter () {
    const { actions } = this.props
    actions.decrementCount({})
  }

  render() {
    return (
      <View style={{
        felx: 1,
        borderColor: 'red',
        borderRadius: 10,
        borderWidth: 1
      }}>
      <Text style={{marginTop: 60, fontSize: 30}}>Count is {this.props.counts}</Text>
      <View style={{flexDirection: 'row', borderColor: 'green', borderWidth: 1, height: 50}}>
        <View style={{flex: 0.5, borderWidth: 1}}>
          <TouchableOpacity onPress={() => this.plusCounter()}>
            <Text style={{fontSize: 20}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: 1}}>
          <TouchableOpacity onPress={() => this.minusCounter()}>
            <Text style={{ fontSize: 20 }}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
}

const mapStoreToProps = store => {
  return {
    counts: store.counts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: { 
      incrementCount: ({countUpdate}) => {
        dispatch(countActions.incrementCount({countUpdate}))
      },
      decrementCount: ({countUpdate}) => {
        dispatch(countActions.decrementCount({countUpdate}))
      },
    }
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(MainScreen)
