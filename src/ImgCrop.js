import ReactCrop,{ makeAspectCrop } from 'react-image-crop';
import React, { Component } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import './logo.svg'
import 'react-image-crop/lib/ReactCrop.scss';



// var ReactCrop = require('react-image-crop');

class ImgCrop extends Component {
    state={
        crop: {
            x: 20,
            y: 10,
            width: 30,
            height: 10,
            // aspect: 16/16,
            // width: 50,
            // height:50,
          }
    }
    onChangeImg = (crop) => {
        this.setState({ crop });
     
        
      }
      btnClick=()=>{
          const canvas = document.getElementById("myCanvas");
        //   canvas.width = this.state.crop.x;
        //   canvas.height = this.state.crop.y;
          const ctx = canvas.getContext('2d');
          console.log(ctx);
          
          ctx.drawImage(
            this.state.crop,
            this.state.crop.x,
            this.state.crop.y,
            this.state.crop.x,
            this.state.crop.y,
            0,
            0,
            this.state.crop.x,
            this.state.crop.y
          );
        //   return new Promise((resolve, reject) => {
        //     canvas.toBlob(file => {
        //       file.name = fileName;
        //       resolve(file);
        //     }, 'image/jpeg');
        //   });
        return 
          
      }



      onImageLoaded = (image) => {
        this.setState({
          crop: makeAspectCrop({
            x: 0,
            y: 0,
            aspect: 16 / 9,
            width: 50,
          }, image.width / image.height),
        });
      }




    render() {
      return (
        <div className="App">
     <ReactCrop src="./a.png" onChange={this.onChangeImg} crop={this.state.crop} style={{height:"200px"}}
     />
<button onClick={this.btnClick}>crop</button>
<br/>
<canvas id="myCanvas" ></canvas>


        </div>
      );
    }
  }
  
  export default ImgCrop;
  