import { useEffect, useState } from "react"
import axios from 'axios'

const useApi = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const fetchApi = () => {
        axios.get(url).then((response) => {
            console.log(response);
            setLoading(false);
            setData(response);
        });
    };

    useEffect(() => {
        console.log('API REQUEST: ' + url);
        fetchApi();
    }, []);

    return { loading, data };
}

export default useApi;