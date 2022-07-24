import { Container } from "./style";
import Logo from '../../assets/pokelogo2.png'



export default function Search(){

    return(
        <Container>
            <div className="lok">
                <img width={500} src={Logo} alt="" />
            </div>
            <div className="poke">
                <input type="text" name="" id="" />
                <button>Search</button>
            </div> 
        </Container>
    )
}