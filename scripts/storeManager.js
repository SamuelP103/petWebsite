
function saveArray(item) {
    let anArray = readArray();
    anArray.push(item);
    let st = JSON.stringify(anArray);
    console.log(st);
    localStorage.setItem("services", st);
}

function readArray() {
    let data = localStorage.getItem("services");
    let list = JSON.parse(data);
    if (!data) {
        return [];
    } else {
        try {
            let list = JSON.parse(data);
            return list;
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return list;
        }
    }
}


