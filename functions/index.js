const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const firestore = admin.firestore()

exports.onUserStatusChanged = functions.database
  .ref('/status/{uid}') // Reference to the Firebase RealTime database key
  .onUpdate(async (change, context) => {

    console.log('Setting up presence...')

    const eventStatus = change.after.val()
    const userRef = firestore.doc(`users/${context.params.uid}`)

    const statusSnapshot = await change.after.ref.once('value')
    const status = statusSnapshot.val()

    console.log('Status: ', status)

    if (status === 'offline') {
      userRef.update({ online: false })
    }
  })