export default function idFormat(i){
    
    i = i.toString()
    
    if (i.length < 2) {
        return "00" + i
        
    } else if (i.length < 3 && i.length > 1) {
        return "0" + i
        
    } else {
        return i
    }
}