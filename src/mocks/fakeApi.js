

const productos = [
    {id: 1, stock:'5', precio:2500, name:'Goriglla Glue Express', description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {id: 2, stock:'10',precio:2600, name:'Purple Punch Auto', description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' },
    {id: 3, stock:'15',precio:2700, name:'Gorilla Glue Foto', description:'SATIVA', category:'sativa' ,img:'/img/GorillaG.webp' },
    {id: 4, stock:'20',precio:2800, name:'Purple Punch Foto', description:'INDICA', category:'indica' ,img:'/img/purpleHaze.webp' }
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
