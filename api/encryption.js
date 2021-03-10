export function encrypt(input, key, secret){
    key = newSecret(input,key)
    secret = newSecret(input,secret)

    var coding1 = xor(input,key)
    var input_change = toChar(coding1)
    var coding2 = xor(input_change,secret)
    return toChar(coding2)
}

export function decrypt(input, key, secret){
    key = newSecret(input,key)
    secret = newSecret(input,secret)

    var coding1 = xor(input,secret)
    var input_change = toChar(coding1)
    var coding2 = xor(input_change,key)
    return toChar(coding2)
}

export function newSecret(input,key){
    var newKey = (input.length == key.length)? newKey = key: (input.length > key.length)? max(input,key): min(input,key)
    return newKey
}

function max(input,key){
    var result = []
    var index = 0
    input.forEach((element) => {
        result.push(key[index])
        if(index < key.length-1) index ++
        else index = 0
    })
    return result
}

function xor(input,key){
    var result = []
    input.forEach((a,index) => result.push(a.charCodeAt(0) ^ key[index].charCodeAt(0)))
    return result
}

function toChar(input){
    var result = []
    input.forEach((element) => result.push(String.fromCharCode(element)))
    return result
}

function min(input, key){
    var result = []
    input.forEach((element, index) => result.push(key[index]))
    return result
}
