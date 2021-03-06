export default `
:host {
  display: block;
  border: 1px solid gray;
  padding: 10px;
  width: 200px;
}

svg {
  fill: lightgray;
  width: 100%:
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
  animation:spin 300ms;
  transform-origin: 50% 50%;
}
@-moz-keyframes spin {
    0 { -moz-transform: rotate(0deg); }
    100% { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    0 { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    0 {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
}
`;