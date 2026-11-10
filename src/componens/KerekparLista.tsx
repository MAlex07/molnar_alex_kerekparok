import { useEffect, useState } from "react";
import type { Kerekparok } from "../type/Kerekparok";
import KerekparCard from "./KerekparCard";
import 'bootstrap/dist/css/bootstrap.min.css';


function Kerekpar(){
    const fajl = "./public/kerekparok.json"
    const [bicikli, setBicikli] = useState<Kerekparok[]>([])
    const [valasztott, setValasztott] = useState<Kerekparok | null>(null)

    

    useEffect(() => {
        async function betolt() {
            try{
                const response = await fetch(fajl);
                const data : Kerekparok[] = await response.json()
                setBicikli(data)
            }catch(err){
                console.error(err)
            }
        }
        betolt()
    },[])

    const legolcsobb = () => {
        const sorted = [...bicikli].sort((a,b) => a.napiDij - b.napiDij)
        setValasztott(sorted[0])
    }

    const legdragabb = () => {
        const sorted = [...bicikli].sort((a,b) => b.napiDij - a.napiDij)
        setValasztott(sorted[0])
    }
    

    return<>
        <header>
            <div className="container">
                <div className="row">
                    <h1>Kiadó kerékpárok</h1>
                </div>
            </div>
        </header> 
        <div className="container">
            {bicikli.map(bicikli =>
                <div key={bicikli.id} className="row">
                    <KerekparCard bicikli={bicikli}></KerekparCard>
                </div>
            )}
        </div>  

        <div className="container">
            <div className="row">
                <button onClick={legolcsobb}>Legolcsóbb</button>
                <button onClick={legdragabb}>Legdragabb</button>
            </div>
        </div>

        {
            valasztott && (
                <div className="container">
                    <div className="row">
                        <KerekparCard bicikli={valasztott}></KerekparCard>
                    </div>
                </div>
            )
        }


    
    </>

}


export default Kerekpar