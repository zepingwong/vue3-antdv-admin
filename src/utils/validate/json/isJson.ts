export default (value: string) => {
    try {
        const obj = JSON.parse(value)
        return !!(typeof obj === "object" && obj)
    } catch (e) {
        return false
    }
}
