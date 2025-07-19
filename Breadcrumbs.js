

function findBreadcrumbs(Obj,targetId,result=[]){
    if(Obj.id === targetId){
        return [...result,Obj.name];
    }
    if(Obj.children){
        for(let child of Obj.children){
            const newResult = findBreadcrumbs(child,targetId,[...result,Obj.name]);
            if(newResult){
                return newResult;
            }
        }
    }
    return null;
}

const categoryTree = {
  name: "Home",
  children: [
    {
      name: "Electronics",
      children: [
        {
          name: "Phones",
          children: [
            { name: "iPhone", id: 1 },
            { name: "Samsung", id: 2 }
          ]
        }
      ]
    }
  ]
};

console.log(findBreadcrumbs(categoryTree, 1));

// ["Home", "Electronics", "Phones", "Samsung"]
