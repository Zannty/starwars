import React from "react";
import LoadIcon from "./../LoadIcon/LoadIcon";
import DidCatch from "./../DidCatch/DidCatch";
import ErrorLoad from "../ErrorLoad/ErrorLoad";
export const WithData = View => {
  return class extends React.Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) this.update();
    }

    componentDidMount() {
      this.update();
    }
    update() {
      this.setState({ loading: true });
      this.props
        .getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
    }

    render() {
      const { data, loading, error } = this.state;
      if (loading) {
        return <LoadIcon />;
      }
      if (error) {
        return <ErrorLoad />;
      }
      return (
        <DidCatch>
          <View {...this.props} data={data} />
        </DidCatch>
      );
    }
  };
};
