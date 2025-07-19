function flattenNestedObj(obj,prefix="",result={}){
  for(let key in obj){
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    
    if(typeof value === "object" && value!==null && !Array.isArray(value)){
        flattenNestedObj(value,newKey,result);
    }
    else{
        result[newKey] = value;
    }
}
return result;
}


const input = {
  user: {
    name: "Alice",
    address: {
      city: "New York",
      zip: {
        code: "10001",
        ext: "1234"
      }
    }
  }
};


console.log(flattenNestedObj(input));
