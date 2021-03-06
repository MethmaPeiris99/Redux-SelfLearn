import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchDataReducer} from "./Reducers/fetchDataReducer";
import {fetchData} from "./Actions/fetchDataAction";

export class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleFetchData = this.handleFetchData.bind(this)
    }

    handleFetchData() {
        this.props.fetchData(2);
    }

    render(){
        return(
            <div>
                <Button
                    onClick={this.handleFetchData}
                    className="btn btn-primary btn-lg"
                >Fetch
                </Button>
                <div>
                    {
                        this.props.user
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.fetchDataReducer.user,
        error: state.fetchDataReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchData:(id)=>{
            dispatch(fetchData(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
