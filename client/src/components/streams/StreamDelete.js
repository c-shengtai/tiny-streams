import React from "react";
import history from "../../history";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        return (
            <>
                <button
                    onClick={() => this.props.deleteStream(id)}
                    className="ui primary button"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </>
        );
    };

    renderContent = () => {
        return this.props.stream
            ? `Are you sure you want to delete ${this.props.stream.title}?`
            : "Are you sure you want to delete this stream?";
    };

    render() {
        return (
            <div>
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
    StreamDelete
);
