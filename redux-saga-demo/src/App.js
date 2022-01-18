import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {handleFetchDataReducer} from "./Reducers/fetchDataReducer";
import {fetchData} from "./Actions/fetchDataAction";

export class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData() {
        this.props.fetchData(2);
    }

    render(){
        return(
            <div>
                <Button
                    onClick={this.fetchData}
                    className="btn btn-primary btn-lg"
                >Fetch
                </Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.handleFetchDataReducer.user,
        error: state.handleFetchDataReducer.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchData:(id)=>{
            dispatch(fetchData())
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(App)
