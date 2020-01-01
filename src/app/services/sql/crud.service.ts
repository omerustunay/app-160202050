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
  create_NewVerecek(record) {
    return this.firestore.collection('verecek').add(record);
  }
 
  read_Hesap() {
    return this.firestore.collection('hesap').snapshotChanges();
  }
  read_Verecek() {
    return this.firestore.collection('verecek').snapshotChanges();
  }
  update_Hesap(recordID,record){
    this.firestore.doc('hesap/' + recordID).update(record);
  }
  update_Verecek(recordID,record){
    this.firestore.doc('verecek/' + recordID).update(record);
  }
 
  delete_Hesap(record_id) {
    this.firestore.doc('hesap/' + record_id).delete();
  }
  delete_Verecek(record_id) {
    this.firestore.doc('verecek/' + record_id).delete();
  }
}
