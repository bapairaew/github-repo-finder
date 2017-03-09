// https://github.com/salsita/prism/blob/6e32178d7615bcb577bffb03eb4d2a21222de42b/packages/prism-react/src/enhanceComponent.ts
import { Component, PropTypes } from 'react';
import { createEagerElement } from 'recompose';

const contextDefintion = { store: PropTypes.object.isRequired };

export default EnhanceableComponent => class PrismEnhancedComponent extends Component {
  static childContextTypes = contextDefintion;
  static contextTypes = contextDefintion;

  static propTypes = {
    wrapper: PropTypes.func.isRequired,
    selector: PropTypes.func.isRequired
  };

  getChildContext() {
    const {
      selector,
      wrapper
    } = this.props;

    const {
      store
    } = this.context;

    const dispatch = (action) => {
      // Fix prism does not work with redux-thunk
      if (typeof action === 'function') {
        action(dispatch);
      } else {
        store.dispatch({
          ...action,
          type: wrapper(action.type)
        });
      }
    }

    const getState = (state : S) => selector(store.getState());

    return {
      store: {
        ...store,
        dispatch,
        getState
      }
    };
  }

  render() {
    return createEagerElement(
      EnhanceableComponent,
      this.props
    );
  }
}
