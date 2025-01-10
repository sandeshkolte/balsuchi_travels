import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// Function to add customer data
export async function addCustomerData(name, phone, from, to, departureDate,via) {
  try {
    const docRef = await addDoc(collection(db, "customers"), {
      name: name,
      phone: phone,
      from: from,
      to: to,
      departureDate: departureDate,
      via:via
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
