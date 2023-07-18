import React from "react";
import { StyledTile, Image, Tags, Rating, Content, Title, Year, Tag, Rate, Votes, StarImage } from "./styled";
import poster from "../images/poster.png";
import star from "../images/Vector.svg";

export const Tile = () => (
    <StyledTile>
        <Image src={poster} alt=""></Image>
        <Content>
            <Title>Mulan</Title>
            <Year>2020</Year>
            <Tags>
                <Tag>Action</Tag>
                <Tag>Adventure</Tag>
                <Tag>Drama</Tag>
            </Tags>
        </Content>
        <Rating>
            <StarImage src= {star} alt=""></StarImage>
            <Rate>7,8</Rate>
            <Votes>35 votes</Votes>
        </Rating>
    </StyledTile>

);