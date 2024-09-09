import React from "react";
import { ContainerTitleSubImage, ImageContent, Info, Title } from "./TitleSubImage.style";
import  ImageDev  from '../../assets/imageDev.jpg'



export function TitleSubImage() {
  return(
    <ContainerTitleSubImage>
      <Title>
        Cenário América Latina
      </Title>
      <Info>
        Acompanhe, trimestralmente, análises dos principais eventos econômicos e políticos em países da América Latina e projeções de especialistas para os próximos dois anos.
      </Info>
      <ImageContent>
        <img src={ImageDev} alt="" />
      </ImageContent>
    </ContainerTitleSubImage>
  )
}