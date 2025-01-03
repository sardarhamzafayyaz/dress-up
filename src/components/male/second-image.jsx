export function SecondImage({imageUrl}) {
    return (
        <img src={imageUrl} alt="" className="h-[380px] w-[450px] rounded-md hover:rotate-3 duration-700 object-cover" />
    )
}