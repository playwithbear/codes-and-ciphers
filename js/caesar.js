const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// User inputs
// var cipher = "AOL XBPJR IYVDU MVE QBTWZ VCLY AOL SHGF KVN"; // <-- Test cipher

let unEncrypted = "";
let isEncrypted = "";
let shift = 0;

/* #############
   #  ENCRYPT  #
   ############# */

function encrypt() {
  // Get plain text to encrypt
    unEncrypted = document.getElementById("plainText").value;
    shift = document.getElementById("keyShift").value;

    // Reset variable value for isEncrypted in case of using function multiple times
    isEncrypted = "";

    shift = parseInt(shift);

    let str = unEncrypted.toUpperCase();
  
    // Determine whether a letter or not  
    for (let i = 0; i<str.length;i++) {
        if (ALPHABET.includes(str[i])) {
            // Find letter location in 'alphabet'
            let j = ALPHABET.indexOf(str[i]);

            // Manipulate letter by shift amount
            j += shift; // <-- FOR ENCRYPTING
            // j += (26-shift); // <-- FOR DECRYPTING
            
            // Test if j is too large, and send back to start of the alphabet
            if (j>25) {
            j = j-26;
            }
            
        // Compile encryption
            isEncrypted += ALPHABET[j];
            
        } else {
            isEncrypted += str[i]; // <-- Maintains spaces
        }
    }
  
  //console.log(isEncrypted);

  // Display encrypted message
  document.getElementById("encryptedText").value = isEncrypted;
  
}

/* #############
   #  DECRYPT  #
   ############# */

   function decrypt() {
    // Get plain text to encrypt
      isEncrypted = document.getElementById("encryptedText").value;
      shift = document.getElementById("keyShift").value;
  
      // Reset variable value for unEncrypted in case of using function multiple times
      unEncrypted = "";
  
      shift = parseInt(shift);
  
      let str = isEncrypted.toUpperCase();
    
      // Determine whether a letter or not  
      for (let i = 0; i<str.length;i++) {
          if (ALPHABET.includes(str[i])) {
              // Find letter location in 'alphabet'
              let j = ALPHABET.indexOf(str[i]);
  
              // Manipulate letter by shift amount
              // j += shift; // <-- FOR ENCRYPTING
              j += (26-shift); // <-- FOR DECRYPTING
              
              // Test if j is too large, and send back to start of the alphabet
              if (j>25) {
              j = j-26;
              }
              
          // Compile encryption
              unEncrypted += ALPHABET[j];
              
          } else {
              unEncrypted += str[i]; // <-- Maintains spaces
          }
      }
    
    //console.log(isEncrypted);
  
    // Display encrypted message
    document.getElementById("plainText").value = unEncrypted;
    
  }