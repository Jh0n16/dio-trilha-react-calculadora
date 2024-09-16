import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #000, #4b0275, #63009c, #000);

    display: flex;
    align-items: center;
    justify-content: center;

`

export const Content = styled.div`
    background-color: #fff;
    width: 60%;
`

export const Row  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`