import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background-color: #fff;
    padding-bottom: 10px;
    padding-top: 3px;
`;

export const ContainerCategory = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true
})`
    background-color: #fff;
    margin-bottom: 8px;
    border-radius: 10px;
    margin: 5px;  
    margin-right: 10px;
`;

export const TextCartegory = styled.Text`
    background-color: #fff;
    padding-top: 10;
    font-size: 28;
    font-weight: bold;
    color: #000;
    padding-left: 5px;
`;

export const BorderItens = styled.View`
    
    width: 210px;
    height: 205px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 10px;
    margin-right: 10px;
`;

export const RowsProducts = styled.View`
    flex-direction: row;
`;

export const ViewItens = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextItens = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 18px;
    color: black;
    text-align: center;
    justify-content: center;
    margin-bottom: 5px;
`;

export const TextPrince = styled.Text`
    text-align: center;
    justify-content: center;
    font-size: 22px;
    color: red;
    font-weight: bold;
    margin-left: 50;
    margin-top: 5px;
    background-color: yellow;
    border-radius: 5;
    width: 110px;
    height: 35px; 
`;

/*export const TabsContainer = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})``;   // Para tira a barra de rolagem */


//Tela fromProduct

export const CardPrince = styled.View`
    flex-direction: column;
`;

export const CardTop = styled.View`
    background-color: #fff;
    flex-direction: row;
    padding: 10px;
`;

export const TextCard = styled.Text`
    font-size: 20px;
    font-weight: bold;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const TextTotal = styled.Text`
    font-size: 30px;
    font-weight: bold;
    flex-direction: column;
    padding-left: 10px;
`;

export const ViewTotal = styled.View`
    flex-direction: column;
`;

export const CardQuant = styled.View`
    font-size: 20px;
    font-weight: bold;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const TextValue = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: red;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    background-color: yellow;
    padding-right: 220px;
`;

export const ViewDesc = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const ViewPrin = styled.View`
    background-color: #fff;
    padding: 20px;
    flex-direction: row;
`;

export const ContainerProduct = styled.View`
    background-color: #fff;
    flex: 1;
    padding-top: 50px;
`;

//Tela Cart

export const ContainerItens = styled.View`
    width: 450;
    height: 200;
    border-width: 1;
    border-radius: 5;
    border-color: gray;
    margin: 10px
`;

export const ContainerPrincipal = styled.ScrollView`
    flex: 1;
    
`;