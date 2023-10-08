import styled from "styled-components";


const Div = styled.div
`

    position: bottom;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;

    list-style: none;
    color: #484848;
    display: inline;
    font-size: 5em;
    letter-spacing: 15px;
    animation: pre-load 3s linear infinite;
  
  
  @keyframes pre-load {
    
    0% {
      color: #484848;
      text-shadow: none;
    }
    
    20% {
      color: #484848;
      text-shadow: none;
    }
    
    40% {
      color: #fff900;
      text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
    }
    
    60% {
      color: #484848;
      text-shadow: none;
    }
    
    80% {
      color: #484848;
      text-shadow: none;
    }
    
    100% {
      color: #484848;
      text-shadow: none;
    }
    
  }
  
  ul li:nth-child(1) {
    animation-delay: .2s;
  }
  
  ul.pre-loader li:nth-child(2) {
    animation-delay: .4s;
  }
  
  ul.pre-loader li:nth-child(3) {
    animation-delay: .6s;
  }
  
  ul.pre-loader li:nth-child(4) {
    animation-delay: .8s;
  }
  
  ul.pre-loader li:nth-child(5) {
    animation-delay: 1s;
  }
  
  ul.pre-loader li:nth-child(6) {
    animation-delay: 1.2s;
  }
  
  ul.pre-loader li:nth-child(7) {
    animation-delay: 1.4s;
  }
  
  @media screen and (max-width: 980px) {
    
    .pre-loader {
      font-size: 30px;
      letter-spacing: 0;
    }
    
  }

`

export default Div