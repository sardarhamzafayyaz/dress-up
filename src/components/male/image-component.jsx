export function ImageForMale({imageUrl}) {
    
    return (      
        <img src={imageUrl} alt="" className="h-[280px] w-[250px] rounded-md hover:rotate-3 duration-700 object-cover" />
    )
}