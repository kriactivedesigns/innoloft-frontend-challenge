const saveToLocalStore = (data) => {
    const serializedData = JSON.stringify(data)
    sessionStorage.setItem('accountInfo',serializedData)
}

module.exports = {

    get: () => {
        const accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
        if(accountInfo){
            return Promise.resolve(accountInfo)
        }
        else{
            return Promise.resolve({})
        }
    },

    post: (url,data) => {
        const accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
        if(accountInfo){
            Object.assign(accountInfo,data)
            saveToLocalStore(accountInfo)
        }
        else{
            saveToLocalStore(data)
        }
        return Promise.resolve(accountInfo)
    } 
}