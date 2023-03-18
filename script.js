const icons = document.querySelectorAll(".icons");
let obj = [
    {
        id: "1",
        ChemicalName: "",
        Vender: "",
        Density: "",
        Viscosity: "",
        Packaging: "",
        PackSize: "",
        unit: "",
        Quantity: ""   
    }
]
console.log(JSON.stringify(obj));
 const arr = Object.entries(obj).map(([key, value]) => ({ key, value }));
 
 


