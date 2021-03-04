export function encrypt(message, key) {

    let charcodeArray_message = _charcodeArray(message);

    let _normalize_key = _normalize_key_size(key, message.length);
    let charcodeArray_key = _charcodeArray(_normalize_key);
    let encrypted_charcodeArray_message = _ArrayXOR(charcodeArray_message, charcodeArray_key);
    let encrypted_message = String.fromCharCode(...encrypted_charcodeArray_message);
    return encrypted_message;
}

export function _normalize_key_size(key, length) {
    let i = 0;
    let norm_key = key
    if (norm_key.length < length) {

        while (norm_key.length  < length) {
            norm_key=norm_key+norm_key[i];
            i++;
        }

    } else if (norm_key.length  > length) {
        norm_key = norm_key.substring(0, length)
    }
    return norm_key;
}

function _ArrayXOR(array1, array2) {

    let arrayXOR = [];
    if (array1.length != array2.length) {
        alert("must be same size")
    } else {
        for (let i = 0; i < array1.length; i++) {
            arrayXOR.push(array1[i] ^ array2[i]);
        }
    }

    return arrayXOR;
}

function _charcodeArray(text) {
    let charcode_text = [];
    for (let i = 0; i < text.length; i++) {
        charcode_text.push(text.charCodeAt(i));
    }
    return charcode_text;
}

export function decrypt(encrypted_message, key) {
    let decrypted_message = encrypt(encrypted_message,key);
    return decrypted_message;
}
