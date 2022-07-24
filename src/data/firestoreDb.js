// https://saveyourtime.medium.com/firebase-cloud-firestore-add-set-update-delete-get-data-6da566513b1b
// https://firebase.google.com/docs/firestore/query-data/queries

import db from './firebaseConfig'

import { getResultDb } from './commonDb'

import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { formatYYYYMMDDHHMMSS } from '../lib/Date';

export const getDb = () => {
    return db;
};

export const insertDb = async (col, data) => {
    try{
        let key = formatYYYYMMDDHHMMSS();

        if(!data.createdate) data['createdate'] = serverTimestamp();
        if(!data.status) data['status'] = 0;
        if(!data.key) data['key'] = key;

        key = data['key'];
        //data['key'] = serverTimestamp();
        //(new Date().getMonth());

        const doc = await addDoc(collection(db, col), data);
        return getResultDb(true, doc, key)
    }
    catch(e) {
        console.error(e)
        return getResultDb(false, e)
    }
}

export const selectDb = async (col, order, conditional) => {
    try{
        let queryConditional = [];
        
        if (order) queryConditional.push(orderBy(order));
        if (conditional) {
            if(Array.isArray(conditional))
                conditional.map(item => {
                    if(item.v) queryConditional.push(where(item.f, item.c, item.v))
                })
            else{
                //console.log('conditional', conditional)
                if(conditional.v) queryConditional.push(where(conditional.f, conditional.c, conditional.v)); 
            }
        }
 
        //console.log('queryConditional', queryConditional)
/*      const queryCollection = 
        queryConditional.length ? query(collection(db, col), ...queryConditional) : query(collection(db, col)); */
        const queryCollection = query(collection(db, col), ...queryConditional);
        //console.log('queryCollection', queryCollection)

        const querySnapshot = await getDocs(queryCollection);
        //console.log('querySnapshot', querySnapshot)
        const result = querySnapshot.docs.map(
            document => ({
                id: document.id,
                ...document.data()
            })
        )
        //console.log('result', result)
        return getResultDb(true, result);        
    } catch (e) {
        console.error(e)
        return getResultDb(false, e)
    }
    
}
