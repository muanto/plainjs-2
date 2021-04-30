export default
/* css */
`
@keyframes spin {
    0 {transform: rotate(0deg) scale(1); opacity:1;}
    50% {transform: rotate(180deg) scale(0.1); opacity:0.2;}
    100% {transform: rotate(360deg) scale(1) ; opacity:1;}
}

:host {
  display: block;
  border: 1px solid gray;
  padding: 10px;
  width: 200px;
}

svg {
  fill: lightgray;
  width: 100%;
  transition: all;
}

button {
  border: none;
  border-radius: 10px;
  background-color: #9d27b4;
  color: white;
  padding: 10px;
  cursor: pointer;
  display: block;
  width: 100%;
}
.rotate {
  animation:spin 500ms;
  transform-origin: 50% 50%;
}
`;