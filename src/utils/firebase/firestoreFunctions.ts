// src/utils/firestoreFunctions.ts
import { firestore } from './firebaseConfig';
import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, addDoc } from 'firebase/firestore';

// Add document to a collection
export const addDocument = async (collectionName: string, document: any) => {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), document);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

// Set document (overwrite)
export const setDocument = async (collectionName: string, docId: string, document: any) => {
  try {
    await setDoc(doc(firestore, collectionName, docId), document);
  } catch (error) {
    console.error("Error setting document:", error);
    throw error;
  }
};

// Get document by ID
export const getDocument = async (collectionName: string, docId: string) => {
  try {
    const docSnap = await getDoc(doc(firestore, collectionName, docId));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
};

// Update document by ID
export const updateDocument = async (collectionName: string, docId: string, document: any) => {
  try {
    await updateDoc(doc(firestore, collectionName, docId), document);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Delete document by ID
export const deleteDocument = async (collectionName: string, docId: string) => {
  try {
    await deleteDoc(doc(firestore, collectionName, docId));
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};
