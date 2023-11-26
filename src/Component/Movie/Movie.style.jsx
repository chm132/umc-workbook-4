import styled from "styled-components";



export const movieContainer = styled.div`
  margin: 15px;
  width: 200px;
  border-radius: 10px;
  background-color: rgb(45, 70, 136);
  color: alieceblue;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition-duration: 0.5s, 0.5s;
  }

`;

export const overlay = styled.div`
  display: none;
  position: absolute;
  background: rgb(0,0,0, 0.7);
  width: 200px;
  height: 355px;
  border-radius: 10px;
  text-align: center;
  color:white;
  flex-wrap: wrap;
  justify-content: center;

  ${movieContainer}:hover & {
    cursor: pointer;
    display: flex;
  }
`;


export const Image = styled.img`
  width: 200px;
  height: 300px;
`;

export const movie_info = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  height: 50px;
`;

export const h4_title = styled.h4`

`;

export const overview = styled.p`
  font-size: 10px;
`;

export const h5_title = styled.h5`
  margin: 6px;
  margin-left: 10px;
`;

export const average = styled.span`
  margin-right: 10px ;
`;

export const appContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;