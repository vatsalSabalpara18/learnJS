const url = "http://localhost:3000/users"

const getData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("Error in Get the Data!")
        }
        const data = await response.json()
        return data 
    } catch (error) {
        console.log(error.message)
    }
}

const postData = async (addData) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                ...addData
            }),
            headers:{
                "content-type":"application/json; charset=UTF-g"
            }
        })
        if(!response.ok){
            throw new Error("Error in Posting data!")
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

const putData = () => {
    
}