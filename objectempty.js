if (typeof obj === "object" && !(obj instanceof Array)){  
    var hasProp = false;  
    for (var prop in obj){  
        hasProp = true;  
        break;  
    }  
    if (hasProp){  
       // model.rows = [obj];  
		model.rows = obj;
    }else{  
        throw "model.rows is empty object"; //obj是空的 kdkdkdkdk
        return false;  
    }  
}  
