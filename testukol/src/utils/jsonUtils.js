export const validateJson = (jsonStr) => {
    try {
        const jsonObject = JSON.parse(jsonStr);
        return {success: true, json: jsonObject}
    } catch (e) {
        alert(e);
        return {success: false}
    }
}