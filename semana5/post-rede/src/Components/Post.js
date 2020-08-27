import React from 'react';
import './Post.css';
import styled from 'styled-components';

const PostContainer = styled.div`
border: 1px solid gray;
width:300px;
`

const PostHeader = styled.div
 height:40px;
 border:1px solid red;
 display: flex;
 align-items: center;
 padding-left: 10px;

const UserPhoto =styled.img
height:30px;
width:30px;
margin-right:10px;
 

class Post extends React.Componet{
    constructor(props){
        super(props)
          render(){
             return<PostContainer>
           <PostHeader>
               <UserPhoto src={"imagem"} alt={"imagem do usuario"}/>
               <p>frase aqui</p>
               </PostHeader>        
                <PostPhoto/>
                <PostFooter>
                    <img src={require("imagem")}/>
                    <p>0</p>
                </PostFooter>


        </PostContainer>

    }
}

export default Post