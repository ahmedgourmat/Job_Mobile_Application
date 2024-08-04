import { useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';

interface UseFetchProps {
    endpoint: string;
    query: string;
}

const useFetch = ({ endpoint, query }: UseFetchProps) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchingData = async () => {
        const options = {
            method: 'GET',
            url: endpoint,
            params: {
                query: query,
                location: 'United States',
                distance: '1.0',
                language: 'en_GB',
                remoteOnly: 'false',
                datePosted: 'month',
                employmentTypes: 'fulltime;parttime;intern;contractor',
                index: '0'
            },
            headers: {
                'x-rapidapi-key': '2e736a0d53msh5f0437939a18d1bp16720ajsn66c6d37c6c74',
                'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
            }
        };

        try {
            const response: AxiosResponse<any> = await axios.request(options);
            setData(response.data.jobs);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchingData()
    }, []);

    return { data, loading, error };
};

export default useFetch;
