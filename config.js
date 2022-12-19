const firebaseConfig = {
 			    apiKey: "AIzaSyAgh-l5g4RbNDIoWgu5K_o0wKhSI74R6eU",
  				authDomain: "crud-531e4.firebaseapp.com",
  				projectId: "crud-531e4",
 				storageBucket: "crud-531e4.appspot.com",
  				messagingSenderId: "500631622860",
  				appId: "1:500631622860:web:38edf5910d696675f55e69"
		};

	firebase.initializeApp(firebaseConfig);
	const db = firebase.firestore();