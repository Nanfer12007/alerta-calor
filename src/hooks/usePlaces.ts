import { useEffect, useState } from 'react';
import api from '../services/placesApi';

export interface Place {
  id: number;
  name: string;
}

export default function usePlaces() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const response = await api.get<Place[]>('/places');
      setPlaces(response.data);
    } catch (error) {
      console.error('Erro ao buscar locais', error);
    } finally {
      setLoading(false);
    }
  };

  const addPlace = async (place: Omit<Place, 'id'>) => {
    const response = await api.post<Place>('/places', place);
    setPlaces([...places, response.data]);
  };

  const updatePlace = async (id: number, updatedPlace: Omit<Place, 'id'>) => {
    await api.put(`/places/${id}`, updatedPlace);
    setPlaces(places.map(p => (p.id === id ? { id, ...updatedPlace } : p)));
  };

  const deletePlace = async (id: number) => {
    await api.delete(`/places/${id}`);
    setPlaces(places.filter(p => p.id !== id));
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return {
    places,
    loading,
    addPlace,
    updatePlace,
    deletePlace,
    fetchPlaces,
  };
}
