import password from "./password.js";
const database_name = "countries";
const _ = `mongodb+srv://crispen:${password}@cluster0.jticd.mongodb.net/${database_name}?retryWrites=true&w=majority`;
export default _;
