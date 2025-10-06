

const data = await fetch('https://dummyjson.com/products').then(res=>res.json()).then(d=>d.products);
export default data;