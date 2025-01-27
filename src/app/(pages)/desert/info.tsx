'use client'

type Data={
    price:string
    setPrice: React.Dispatch<React.SetStateAction<string>>;
    name:string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    description:string
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const Info:React.FC<Data> = ({price,setPrice, name, setName,description,setDescription}) => {

    return (
        <div className='flex flex-col'>
            <input 
                type="text"
                placeholder='enter name'
                value={name}
                onChange={(e)=>{
                    const preValue = e.target.value.replace(/[^a-zA-Z]/g, '');
                    setName(preValue);
                }}
             />
            <input 
                type="text" 
                placeholder='enter price'
                value={price}
                onChange={(e)=>{
                    const preValue = e.target.value.replace(/[^0-9]/g, '');
                    setPrice(preValue)
                }}
            />
            <input 
                type="text" 
                pattern="enter description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />
        </div>
    );
};

export default Info;