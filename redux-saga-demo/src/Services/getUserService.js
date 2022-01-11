import axios from "axios";

export function getUserService(){
    return axios.request({
        method: "get",
        url: "https://my-json-server.typicode.com/MethmaPeiris99/demo/user"
    });
}