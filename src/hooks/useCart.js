import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {

    const { user } = useFirebase();
    const { uid } = user;
    const [selectedService, setSelectedService] = useState([]);
    useEffect(() => {
        fetch(`https://haunted-phantom-42348.herokuapp.com/cart/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedService([]);
                }
            })
    }, [uid])

    const addToCart = service => {
        const isAvailable = selectedService.find(selected => selected._id === service._id);

        delete service._id;
        service.uid = uid;
        service.status = 'pending';

        if (isAvailable) {
            alert('Already added this item on cart.');
        }
        else {
            fetch('https://haunted-phantom-42348.herokuapp.com/cart/add', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedService, service];
                        setSelectedService(newSelection)
                    }
                })
        }
    }

    return {
        addToCart,
        selectedService,
        setSelectedService
    }
}

export default useCart;