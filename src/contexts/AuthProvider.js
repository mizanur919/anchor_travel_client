import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useFirebase from '../hooks/useFirebase';
import useTourServices from '../hooks/useTourServices';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //const allContext = useFirebase();
    const {user, signInUsingGoogle, logOut, isLoading, setIsLoading} = useFirebase();
    const {services, totalServices, totalPages, currentPage, setCurrentPage} = useTourServices();
    const {addToCart, selectedService, setSelectedService} = useCart();
    const data = {
        user, 
        signInUsingGoogle, 
        logOut, 
        isLoading, 
        setIsLoading,
        services,
        totalServices,
        totalPages,
        currentPage, 
        setCurrentPage,
        addToCart,
        selectedService,
        setSelectedService
    };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;