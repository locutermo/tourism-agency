export default async function Page({params}){

    const tour = await getTour(params.id)
    
    return (
        <div>
            {JSON.stringify(tour)}
        </div>
    )
    


}


async function getTour(id){
    const res = await fetch(`http://localhost:3000/api/tours/${id}`,{
        headers: {
            'Content-Type': 'application/json;charset=iso-8859-1'
        }
    })
    return res.json()
}