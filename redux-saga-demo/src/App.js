import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

export class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }

        this.fetchData = this.fetchData.bind(this)
    }
    fetchData() {

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

export default App
