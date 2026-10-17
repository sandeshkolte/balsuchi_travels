import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// Function to add customer data
export async function addCustomerData(name, phone, from, to, departureDate, via) {
  const docRef = await addDoc(collection(db, "customers"), {
    name,
    phone,
    from,
    to,
    departureDate,
    via,
  });
  console.log("Document written with ID: ", docRef.id);

  return docRef.id;
}
