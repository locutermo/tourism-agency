import Image from "next/image"
export default async function ItenerarySteps({steps}){

    return  <ol role="list" >
            {steps?.map( (step,index) => (
                <li  key = {index} className="space-x-2 md:space-x-4 grid grid-cols-12 [&:last-child>div>span]:bg-transparent">
                    <div className="col-span-2 flex flex-col items-center" >
                        <div className="absolute rounded-2xl shadow-md bg-blue-400 w-8 h-8 border-white border-2 ">
                        
                        </div>
                        <span className="h-full w-1 rounded-xl bg-orange-300">

                        </span>
                    </div>
                    <div className="text-xs grid col-span-10 mb-6">
                        <h2 className="font-bold pt-2">{step.title}</h2>
                        <p>{step.description}</p>
                    </div>
                </li>
            ))}
        </ol>

}