import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setConfigurations } from '../app/store/configSlice';
import axios from 'axios';

const HomePage = () => {
    const dispatch = useDispatch();
    const configurations = useSelector((state: RootState) => state.config.configurations);

    useEffect(() => {
        const fetchConfigurations = async () => {
            try {
                const response = await axios.get('/configurations');
                dispatch(setConfigurations(response.data));
            } catch (error) {
                console.error('Failed to fetch configurations', error);
            }
        };
        fetchConfigurations();
    }, [dispatch]);

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Configurations</h2>
            <ul>
                {configurations.map((config) => (
                    <li key={config.id} className="p-2 border-b">{config.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
