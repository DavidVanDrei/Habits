// Saving data with key in localStorage
const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// Loading data with key from localStorage
const loadData = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data;
    } 
    catch (error) {
        return undefined;
    }
}
 
export { loadData, saveData };  