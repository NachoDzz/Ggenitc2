function onAdd(contar) {
    alert("el producto fue agregado")
}

const productos = [
    {id:'01', stock:'5', onAdd: onAdd ,name:'Goriglla Glue Express', description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {id:'02', stock:'10', onAdd: onAdd ,name:'Purple Punch Auto', description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' },
    {id:'03', stock:'15', onAdd: onAdd ,name:'Gorilla Glue Foto', description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {id:'04', stock:'20', onAdd: onAdd ,name:'Purple Punch Foto', description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' }
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
