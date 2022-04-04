function onAdd(contar) {
    alert("el producto fue agregado")
}

const productos = [
    {id: 1, stock:'5', onAdd: onAdd ,name:'Goriglla Glue Express', description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {id: 2, stock:'10', onAdd: onAdd ,name:'Purple Punch Auto', description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' },
    {id: 3, stock:'15', onAdd: onAdd ,name:'Gorilla Glue Foto', description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {id: 4, stock:'20', onAdd: onAdd ,name:'Purple Punch Foto', description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' }
]

export const getProducts = new Promise ((resolve, reject) => {
    let condition = true 
    if(condition){
        setTimeout(() =>{
            resolve(productos)
        },2000)
    }else{
        reject('nooo, salio todo mal D:')
    }
})

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}
