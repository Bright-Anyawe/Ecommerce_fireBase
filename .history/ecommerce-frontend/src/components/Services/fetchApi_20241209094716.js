import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { GeneralContext } from "../Context/ContextProvider";
import { useContext } from "react";

const {app} = useContext(GeneralContext)

const db = getFirestore(app)
const productCollectionRef = collection(db, "products");

const fetchProducts = () => {

}

