"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const DealsContext = createContext();

export const useDeals = () => {
  return useContext(DealsContext);
};

export const DealsProvider = ({ children }) => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "deals")); // Replace 'deals' with your collection name
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDeals(data);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };

    fetchDeals();
  }, []);

  return (
    <DealsContext.Provider value={deals}>
      {children}
    </DealsContext.Provider>
  );
};