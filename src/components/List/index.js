import React from 'react';
import { connect } from 'react-redux';
import enhanceComponent from 'utils/enhanceComponent';
import styled from 'styled-components';

import ErrorBox from 'components/ErrorBox';
import Loading from 'components/Loading';

import { fetchItems } from './actions';

const NoResult = styled.div`
  padding: 10px;
`;

class List extends React.Component {
  fetch({ fetchItems, endpoint }) {
    endpoint && fetchItems(endpoint);
  }

  componentDidMount() {
    this.fetch(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.endpoint !== this.props.endpoint) {
      this.fetch(nextProps);
    }
  }

  render() {
    const { results, loading, error, renderer = () => {} } = this.props;
    return (
      <div>
        { error ? <ErrorBox>{error + ''}</ErrorBox> :
                  loading ? <Loading /> :
                            !results ? <NoResult>No results</NoResult> : renderer(results) }
      </div>
    );
  }
}

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: endpoint => dispatch(fetchItems(endpoint))
  };
}

export default enhanceComponent(connect(mapStateToProps, mapDispatchToProps)(List));
