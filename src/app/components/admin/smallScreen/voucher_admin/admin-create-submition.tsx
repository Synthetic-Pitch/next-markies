'use server'

export default async function AdminCreateSubmition() {

    return(
        <form action="">
            <div className="flex justify-center">
                <label htmlFor="image" className="text-xl px-4 py-2">Input Image</label>
                <input id="image" type="file" className="hidden" accept="image/*" required/>
            </div>
            <div className="flex justify-evenly items-center mt-2">
                <label htmlFor="discount" >hasShipping Free</label>
                <div className="flex flex-col gap-2 w-[100px]">
                    <div className="w-full flex justify-evenly">
                        <span>
                            true
                        </span>
                        <span>
                            false
                        </span>
                    </div>
                    
                    <div className="flex justify-evenly">
                        <input className="h-4 w-4" type="checkbox" />
                        <input className="h-4 w-4" type="checkbox" />
                    </div>
                </div>
            </div>
        </form>
    )
};