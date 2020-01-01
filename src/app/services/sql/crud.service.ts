import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
  create_NewHesap(record) {
    return this.firestore.collection('hesap').add(record);
  }
 
  read_Hesap() {
    return this.firestore.collection('hesap').snapshotChanges();
  }
 
  update_Hesap(recordID,record){
    this.firestore.doc('hesap/' + recordID).update(record);
  }
 
  delete_Hesap(record_id) {
    this.firestore.doc('hesap/' + record_id).delete();
  }
}