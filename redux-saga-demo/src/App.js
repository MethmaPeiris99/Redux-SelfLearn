import {Component} from "react";

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
                <button
                    onClick={this.fetchData}
                    className="btn btn-primary"
                >Fetch
                </button>

            </div>
        )
    }
}

export default App
