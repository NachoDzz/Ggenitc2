

const productos = [
    {name:'Goriglla Glue Express', id: 1, stock:'5', precio:2500,  description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {name:'Purple Punch Auto', id: 2, stock:'10',precio:2600,  description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' },
    {name:'Gorilla Glue Foto', id: 3, stock:'15',precio:2700,  description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {name:'Purple Punch Foto', id: 4, stock:'20',precio:2800,  description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' }
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
