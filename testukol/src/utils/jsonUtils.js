//@flow

export const validateJson = (jsonStr: string) : Object => {
    try {
        const jsonObject = JSON.parse(jsonStr);
        return {success: true, json: jsonObject}
    } catch (e) {
        alert(e);
        return {success: false}
    }
}