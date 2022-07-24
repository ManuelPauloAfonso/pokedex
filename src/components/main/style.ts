import styled from "styled-components";





export const Container = styled.main`


.img{
    width: 3rem;
}
.container-pokemon{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.pokeList {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.pokemon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}


`